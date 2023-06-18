import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';
import { GenerateConversationDTO } from './dto/generate_conversation.dto';
import { PrismaService } from 'prisma/prisma.service';
import { PromptService } from '../prompt/prompt.service';
import { mockShopData } from './mock/shop-data.mock';
import { ReplyDTO } from './dto/reply.dto';
import { MessageService } from 'src/message/message.service';

@Injectable()
export class OpenaiService {
  private openai: OpenAIApi;
  private readonly logger = new Logger(OpenaiService.name);

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private promptService: PromptService,
    private messageService: MessageService,
  ) {
    const configuration = new Configuration({
      apiKey: this.configService.get<string>('OPENAI_SECRET_KEY'),
    });
    this.openai = new OpenAIApi(configuration);
  }
  async createChatCompletion(message: GenerateConversationDTO): Promise<any> {
    this.logger.log('Triggered createChatCompletion');
    const systemPrompt = this.promptService.generateSystemPrompt(mockShopData);

    const prompt = `${systemPrompt} 
        Human: Hello Who Are You?\n        
        AI: Hello I am assistant of this shop. How can I help you?\n
        ${message.content}`;

    const response = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    const conversation = await this.prisma.conversation.create({
      data: {
        open_id: response.data.id,
      },
    });

    // System Prompt
    await this.messageService.addMessage(conversation.id, 10000000, prompt);

    // User Prompt
    await this.messageService.addMessage(
      conversation.id,
      message.userId,
      message.content,
    );

    // OpenAI prompt
    await this.messageService.addMessage(
      conversation.id,
      1000000,
      response.data.choices[0].message.content,
    );

    return {
      conversation,
      message,
      response: response.data.choices[0].message,
    };
  }

  async getConversation(conversationId: number): Promise<any> {
    return await this.prisma.conversation.findFirst({
      where: { id: conversationId },
      include: { messages: true },
    });
  }

  async replyMessage(reply: ReplyDTO): Promise<any> {
    this.logger.log('Triggered replyMessage');
    const { conversationId, content, userId } = reply;

    await this.messageService.addMessage(conversationId, userId, content);

    const conversation = await this.getConversation(conversationId);

    const prompt = `${this.messageService.collectMessages(
      conversation.messages,
    )}`;

    const response = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Human: ${prompt}` }],
    });

    await this.messageService.addMessage(
      conversation.id,
      1000000,
      response.data.choices[0].message.content,
    );

    return {
      conversation,
      response: response.data.choices[0].message,
    };
  }
}
