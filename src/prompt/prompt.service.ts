import { Injectable } from '@nestjs/common';
import { ShopDTO } from './dto/shop.dto';
import { Message } from '@prisma/client';

@Injectable()
export class PromptService {
  generatePrompt(shopData: ShopDTO): string {
    const systemPrompt = `You are the AI chatbot for ${shopData.name}, 
        an e-commerce store located in ${shopData.city}, ${shopData.province}, ${shopData.country}.
        Your role is to assist customers with inquiries about products,
        order placement, and order status. 
        You should provide accurate and prompt responses,
        maintaining a friendly and professional tone at all times.
        Let's start helping customers! The conversation starts with:\n`;
    return systemPrompt;
  }

  collectMessages(messages: Message[]): string {
    let prompt = '';
    messages.map((message) => {
      prompt += `${message.content}\n`;
    });
    return prompt;
  }
}
