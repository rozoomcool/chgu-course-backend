// lesson.service.ts (обновленный)
import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CreateLessonDto, UpdateLessonDto } from './dto/lesson.dto';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonDto: CreateLessonDto, userId: number) {
    // Check if chapter exists
    const course = await this.prisma.course.findUnique({
      where: { id: createLessonDto.courseId },
    });

    if (!course) {
      throw new NotFoundException(
        `Course with ID ${createLessonDto.courseId} not found`,
      );
    }

    if (course.teacherId != userId) {
      throw new NotAcceptableException(
        `You are not permitted to course with ID ${createLessonDto.courseId}`,
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
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
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

  async update(id: number, userId: number, updateLessonDto: UpdateLessonDto) {
    try {

      const course = await this.prisma.course.findUnique({
        where: { id: updateLessonDto.courseId },
      });
  
      if (!course) {
        throw new NotFoundException(
          `Course with ID ${updateLessonDto.courseId} not found`,
        );
      }

      if (course.teacherId != userId) {
        throw new NotAcceptableException(
          `You are not permitted to lesson with ID ${course.id}`,
        );
      }

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