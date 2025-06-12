import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
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
                lessons: true

            }
        });
    }

    async create(createCourseDto: CreateCourseDto, teacherId: number) {
        return this.prisma.course.create({
            data: {
                ...createCourseDto,
                teacher: {
                    connect: {
                        id: teacherId
                    }
                }
            },
        });
    }

    async findAll() {
        return this.prisma.course.findMany({
            include: {
                lessons: true,
            },
        });
    }

    async findOne(id: number, lessons: boolean, students: boolean, teacher: boolean) {
        const course = await this.prisma.course.findUnique({
            where: { id },
            include: {
                lessons,
                teacher,
                students
            },
        });

        
        if (!course) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }
        
        return course;
    }

    async deleteLesson(courseId: number, lessonId: number, creatorId: number) {
        try {
            const course = (await this.prisma.course.findUnique({
                where: { id: courseId },
                include: {
                    lessons: {
                        where: { id: lessonId }
                    }
                }
            }))!;

            if (course.teacherId != creatorId) {
                throw new NotAcceptableException("You cant accept to this entity");
            }

            await this.prisma.lesson.delete({
                where: { id: course.lessons[0].id }
            })

        } catch (error) {
            throw new NotFoundException(`Lesson with ID ${lessonId} not found`);
        }
    }

    async update(id: number, userId: number, updateCourseDto: UpdateCourseDto) {
        try {
            const course = (await this.prisma.course.findUnique({
                where: { id }
            }))!;

            if (course.teacherId == userId) {
                return await this.prisma.course.update({
                    where: { id },
                    data: updateCourseDto,
                });
            }

            throw new NotAcceptableException("You cant accept to this entity");
        } catch (error) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }
    }

    async remove(id: number, userId: number) {
        try {
            const course = (await this.prisma.course.findUnique({ where: { id } }))!;
            if (course.teacherId == userId) {
                return await this.prisma.course.delete({
                    where: { id },
                });
            }
            throw new NotAcceptableException("You cant accept to this entity");
        } catch (error) {
            throw new NotFoundException(`Course with ID ${id} not found`);
        }
    }
}
