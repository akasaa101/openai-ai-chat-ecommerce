import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Message } from '@prisma/client';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  constructor(private prisma: PrismaService) {}
  async addMessage(conversationId: number, userId: number, message: string) {
    const data = await this.prisma.message.create({
      data: {
        conversationId: conversationId,
        userId: userId,
        content: message,
      },
    });

    this.logger.log('Message added.', data);

    return data;
  }

  collectMessages(messages: Message[]): string {
    let chat = '';
    messages.map((message) => {
      chat += `${message.content}\n`;
    });
    this.logger.log('Collect messages', chat);
    return chat;
  }
}
