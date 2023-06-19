import { Body, Controller, Get, Post } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { CreatePromptDto } from './dto/createPrompt.dto';
@Controller('prompt')
export class PromptController {
  constructor(private promptService: PromptService) {}

  @Get('')
  async findAll() {
    return await this.promptService.findAll();
  }

  @Post('')
  async create(@Body() prompt: CreatePromptDto) {
    return await this.promptService.create(prompt);
  }
}
