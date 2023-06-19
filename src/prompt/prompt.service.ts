import { Injectable, Logger } from '@nestjs/common';
import { ShopDTO } from './dto/shop.dto';
import { Prompt } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePromptDto } from './dto/createPrompt.dto';

@Injectable()
export class PromptService {
  private readonly logger = new Logger(PromptService.name);
  constructor(private prisma: PrismaService) {}

  async create(prompt: CreatePromptDto) {
    const result = await this.prisma.prompt.create({
      data: {
        ...prompt,
      },
    });
    return result;
  }

  async findAll(): Promise<Prompt[]> {
    return await this.prisma.prompt.findMany({
      skip: 0,
      take: 10,
    });
  }

  generateSystemPrompt(shopData: ShopDTO): string {
    const systemPrompt = `You are the AI chatbot for ${shopData.name}, 
        an e-commerce store located in ${shopData.city}, ${shopData.province}, ${shopData.country}.
        Your role is to assist customers with inquiries about products,
        order placement, and order status. 
        You should provide accurate and prompt responses,
        maintaining a friendly and professional tone at all times.
        Let's start helping customers! The conversation starts with:\n`;

    this.logger.log('Generate systemPrompt', systemPrompt);

    return systemPrompt;
  }
}
