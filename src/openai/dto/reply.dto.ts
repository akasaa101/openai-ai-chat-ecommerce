import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class ReplyDTO {
  @IsNumber()
  @IsNotEmpty()
  conversationId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  content: string;
}
