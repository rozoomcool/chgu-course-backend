import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  lecture?: string;

  @IsNotEmpty()
  @IsNumber()
  chapterId: number;
}

export class UpdateLessonDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  lecture?: string;
}