// lesson-attachment.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CreateLessonAttachmentDto, UpdateLessonAttachmentDto } from './dto/lessonAttachment.dto';

@Injectable()
export class LessonAttachmentService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonAttachmentDto: CreateLessonAttachmentDto) {
    // Check if lesson exists
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: createLessonAttachmentDto.lessonId },
    });

    if (!lesson) {
      throw new NotFoundException(
        `Lesson with ID ${createLessonAttachmentDto.lessonId} not found`,
      );
    }

    // Check if attachment already exists for this lesson
    const existingAttachment = await this.prisma.lessonAttachment.findUnique({
      where: { lessonId: createLessonAttachmentDto.lessonId },
    });

    if (existingAttachment) {
      throw new Error(
        `Attachment already exists for lesson with ID ${createLessonAttachmentDto.lessonId}`,
      );
    }

    return this.prisma.lessonAttachment.create({
      data: createLessonAttachmentDto,
    });
  }

  async findAll() {
    return this.prisma.lessonAttachment.findMany({
      include: {
        lesson: true,
      },
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LessonAttachmentWhereUniqueInput;
    where?: Prisma.LessonAttachmentWhereInput;
    orderBy?: Prisma.LessonAttachmentOrderByWithRelationInput;
    include?: Prisma.LessonAttachmentInclude;
  }) {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.lessonAttachment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async findOne(id: number) {
    const attachment = await this.prisma.lessonAttachment.findUnique({
      where: { id },
      include: {
        lesson: true,
      },
    });

    if (!attachment) {
      throw new NotFoundException(`Lesson attachment with ID ${id} not found`);
    }

    return attachment;
  }

  async findByLessonId(lessonId: number) {
    const attachment = await this.prisma.lessonAttachment.findUnique({
      where: { lessonId },
      include: {
        lesson: true,
      },
    });

    if (!attachment) {
      throw new NotFoundException(
        `Attachment for lesson with ID ${lessonId} not found`,
      );
    }

    return attachment;
  }

  async update(id: number, updateLessonAttachmentDto: UpdateLessonAttachmentDto) {
    try {
      return await this.prisma.lessonAttachment.update({
        where: { id },
        data: updateLessonAttachmentDto,
      });
    } catch (error) {
      throw new NotFoundException(`Lesson attachment with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.lessonAttachment.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Lesson attachment with ID ${id} not found`);
    }
  }
}