// test.dto.ts
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TestStageType } from 'generated/prisma';

export class CreateTestDto {
  @IsOptional()
  @IsNumber()
  lessonId?: number;
}

export class UpdateTestDto {
  @IsOptional()
  @IsNumber()
  lessonId?: number;
}

export class CreateTestStageDto {
  @IsNotEmpty()
  @IsNumber()
  testId: number;

  @IsOptional()
  @IsEnum(TestStageType)
  type?: TestStageType;

  @IsNotEmpty()
  @IsString()
  question: string;
}

export class UpdateTestStageDto {
  @IsOptional()
  @IsEnum(TestStageType)
  type?: TestStageType;

  @IsOptional()
  @IsString()
  question?: string;

  @IsBoolean()
  isCorrect: boolean;
}

export class CreateOptionDto {
  @IsNotEmpty()
  @IsString()
  option: string;

  @IsNotEmpty()
  @IsNumber()
  testStageId: number;

  @IsNotEmpty()
  @IsBoolean()
  isCorrect: boolean;
}

export class UpdateOptionDto {
  @IsOptional()
  @IsString()
  option?: string;
}