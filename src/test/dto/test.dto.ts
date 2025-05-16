// test.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
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

  @IsNotEmpty()
  @IsNumber()
  answerId: number;
}

export class UpdateTestStageDto {
  @IsOptional()
  @IsEnum(TestStageType)
  type?: TestStageType;

  @IsOptional()
  @IsString()
  question?: string;

  @IsOptional()
  @IsNumber()
  answerId?: number;
}

export class CreateOptionDto {
  @IsNotEmpty()
  @IsString()
  option: string;

  @IsNotEmpty()
  @IsNumber()
  testStageId: number;
}

export class UpdateOptionDto {
  @IsOptional()
  @IsString()
  option?: string;
}