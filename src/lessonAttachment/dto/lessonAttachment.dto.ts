// lesson-attachment.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { LessonAttachmentType } from 'generated/prisma';

export class CreateLessonAttachmentDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsEnum(LessonAttachmentType)
  attachmentType: LessonAttachmentType;

  @IsNotEmpty()
  @IsNumber()
  lessonId: number;
}

export class UpdateLessonAttachmentDto {
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsEnum(LessonAttachmentType)
  attachmentType?: LessonAttachmentType;
}