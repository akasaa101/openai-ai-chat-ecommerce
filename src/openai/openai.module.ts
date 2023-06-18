import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenaiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { PromptModule } from 'src/prompt/prompt.module';
import { MessageModule } from 'src/message/message.module';
@Module({
  imports: [ConfigModule, PrismaModule, PromptModule, MessageModule],
  providers: [OpenaiService],
  controllers: [OpenaiController],
})
export class OpenaiModule {}
