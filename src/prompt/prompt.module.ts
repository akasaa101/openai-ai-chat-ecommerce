import { Module } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { PromptController } from './prompt.controller';
@Module({
  providers: [PromptService],
  exports: [PromptService],
  controllers: [PromptController],
})
export class PromptModule {}
