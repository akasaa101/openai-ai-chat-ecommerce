import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsNumber,
  MinLength,
} from 'class-validator';
import { ChatCompletionRequestMessageRoleEnum } from 'openai';

export class GenerateConversationDTO {
  @IsEnum(ChatCompletionRequestMessageRoleEnum)
  role: ChatCompletionRequestMessageRoleEnum;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  content: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
