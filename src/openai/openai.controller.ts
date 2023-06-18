import { Controller, Post, Body } from '@nestjs/common';

import { OpenaiService } from './openai.service';
import { GenerateConversationDTO } from './dto/generate_conversation.dto';
import { ReplyDTO } from './dto/reply.dto';

@Controller('openai')
export class OpenaiController {
  constructor(private openaiService: OpenaiService) {}

  @Post('conversation')
  async generateConversation(
    @Body() generateConversation: GenerateConversationDTO,
  ) {
    return await this.openaiService.createChatCompletion(generateConversation);
  }

  @Post('message')
  async replyMessage(@Body() reply: ReplyDTO) {
    return await this.openaiService.replyMessage(reply);
  }

  @Post('test')
  async test(@Body() data: any) {
    return this.openaiService.getConversation(data.conversationId);
  }
}
