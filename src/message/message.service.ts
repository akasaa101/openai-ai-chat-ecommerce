import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}
  async addMessage(conversationId: number, userId: number, message: string) {
    return await this.prisma.message.create({
      data: {
        conversationId: conversationId,
        userId: userId,
        content: message,
      },
    });
  }
}
