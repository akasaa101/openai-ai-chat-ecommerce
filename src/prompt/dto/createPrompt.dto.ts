import { IsNumber, IsString } from 'class-validator';

export class CreatePromptDto {
  @IsNumber()
  role_id: number;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
