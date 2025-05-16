import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateChapterDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  courseId: number;
}