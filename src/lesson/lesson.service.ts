// lesson.service.ts (обновленный)
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CreateLessonDto, UpdateLessonDto } from './dto/lesson.dto';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonDto: CreateLessonDto) {
    // Check if chapter exists
    const chapter = await this.prisma.course.findUnique({
      where: { id: createLessonDto.courseId },
    });

    if (!chapter) {
      throw new NotFoundException(
        `Chapter with ID ${createLessonDto.courseId} not found`,
      );
    }

    return this.prisma.lesson.create({
      data: createLessonDto,
    });
  }

  async findAll() {
    return this.prisma.lesson.findMany({
      include: {
        test: {
          include: {
            testStages: {
              include: {
                options: true,
              },
            },
          },
        },
        attachments: true,
      },
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LessonWhereUniqueInput;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput;
    include?: Prisma.LessonInclude;
  }) {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.lesson.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async findAllByCourseId(courseId: number) {
    // Check if chapter exists
    const chapter = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!chapter) {
      throw new NotFoundException(`Chapter with ID ${courseId} not found`);
    }

    return this.prisma.lesson.findMany({
      where: { courseId },
      include: {
        test: {
          include: {
            testStages: {
              include: {
                options: true,
              },
            },
          },
        },
        attachments: true,
      },
    });
  }

  async findOne(id: number) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
      include: {
        test: {
          include: {
            testStages: {
              include: {
                options: true,
                answer: true,
              },
            },
          },
        },
        attachments: true,
      },
    });

    if (!lesson) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }

    return lesson;
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    try {
      return await this.prisma.lesson.update({
        where: { id },
        data: updateLessonDto,
      });
    } catch (error) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.lesson.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }
  }
}