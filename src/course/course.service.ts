import { Injectable, NotFoundException } from '@nestjs/common';
import { Course, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Injectable()
export class CourseService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CourseWhereUniqueInput;
        where?: Prisma.CourseWhereInput;
        orderBy?: Prisma.CourseOrderByWithRelationInput;
    }): Promise<Course[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.course.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async findManyDeep(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CourseWhereUniqueInput;
        where?: Prisma.CourseWhereInput;
        orderBy?: Prisma.CourseOrderByWithRelationInput;
    }): Promise<Course[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.course.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                chapters: {
                    select: {
                        lessons: {
                            select: {
                                // lectureStages: true,
                                // testStages: true
                            }
                        }
                    }
                },

            }
        });
    }

    async create(createCourseDto: CreateCourseDto) {
        return this.prisma.course.create({
            data: createCourseDto,
        });
    }

    async findAll() {
        return this.prisma.course.findMany({
            include: {
                chapters: {
                    include: {
                        lessons: true,
                    },
                },
            },
        });
    }

    async findOne(id: number) {
        const course = await this.prisma.course.findUnique({
            where: { id },
            include: {
                chapters: {
                    include: {
                        lessons: true,
                    },
                },
            },
        });

        if (!course) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }

        return course;
    }

    async update(id: number, updateCourseDto: UpdateCourseDto) {
        try {
            return await this.prisma.course.update({
                where: { id },
                data: updateCourseDto,
            });
        } catch (error) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }
    }

    async remove(id: number) {
        try {
            return await this.prisma.course.delete({
                where: { id },
            });
        } catch (error) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }
    }
}
