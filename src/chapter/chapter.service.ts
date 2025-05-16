// chapter.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChapterDto } from './dto/createChapter.dto';
import { UpdateChapterDto } from './dto/updateChapter.dto';

@Injectable()
export class ChapterService {
  constructor(private prisma: PrismaService) {}

  async create(createChapterDto: CreateChapterDto) {
    // Check if course exists
    const course = await this.prisma.course.findUnique({
      where: { id: createChapterDto.courseId },
    });

    if (!course) {
      throw new NotFoundException(
        `Course with ID ${createChapterDto.courseId} not found`,
      );
    }

    return this.prisma.chapter.create({
      data: createChapterDto,
    });
  }

  async findAll() {
    return this.prisma.chapter.findMany({
      include: {
        lessons: true,
      },
    });
  }

  async findAllByCourseId(courseId: number) {
    // Check if course exists
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    return this.prisma.chapter.findMany({
      where: { courseId },
      include: {
        lessons: true,
      },
    });
  }

  async findOne(id: number) {
    const chapter = await this.prisma.chapter.findUnique({
      where: { id },
      include: {
        lessons: true,
      },
    });

    if (!chapter) {
      throw new NotFoundException(`Chapter with ID ${id} not found`);
    }

    return chapter;
  }

  async update(id: number, updateChapterDto: UpdateChapterDto) {
    try {
      return await this.prisma.chapter.update({
        where: { id },
        data: updateChapterDto,
      });
    } catch (error) {
      throw new NotFoundException(`Chapter with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.chapter.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Chapter with ID ${id} not found`);
    }
  }
}