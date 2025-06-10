import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  title: string;

  @IsString()
  lecture: string;

  @IsNotEmpty()
  @IsNumber()
  courseId: number;
}

export class UpdateLessonDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  lecture?: string;

  @IsNotEmpty()
  @IsNumber()
  courseId: number;
}