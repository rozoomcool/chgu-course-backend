import { BadRequestException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Course, CourseAdmision, CourseAdmissionState, Prisma } from 'generated/prisma';
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

    async getAllAdmissionByCourse(courseId: number) {
        return await this.prisma.courseAdmision.findMany({
            where: {
                courseId
            }
        })
    }

    async getUserCourseAdmission(courseId: number, userId: number) {
        return await this.prisma.courseAdmision.findUnique({
            where: {
                id: {
                    courseId,
                    userId
                }
            }
        })
    }

    async getAllAdmissionByUser(userId: number) {
        return await this.prisma.courseAdmision.findMany({
            where: {
                userId
            }
        })
    }

    async addAdmission(courseId: number, userId: number): Promise<CourseAdmision> {
        try {
            return await this.prisma.courseAdmision.create({
                data: {
                    courseId,
                    userId
                }
            });
        } catch (e) {
            throw new BadRequestException(`Course with ID ${courseId} not found`);
        }
    }

    async changeAdmissionState(params: { courseId: number, userId: number, ownerId: number, admissionState: CourseAdmissionState}): Promise<CourseAdmision> {
        try {
            const course = await this.prisma.course.findUnique({
                where: {
                    id: params.courseId
                }
            })
            if (!course) {
                throw new NotFoundException(`Course with ID ${params.courseId} not found`)
            }
            if (course.teacherId != params.ownerId) {
                throw new NotAcceptableException(`User has not permission`)
            }
            return await this.prisma.courseAdmision.update({
                where: {
                    id: {
                        userId: params.userId,
                        courseId: params.courseId
                    }
                },
                data: {
                    admissionState: CourseAdmissionState.REJECTED
                }
            });
        } catch (e) {
            throw new BadRequestException(`Course with ID ${params.courseId} not found`);
        }
    }

    async countCourseStudents(courseId: number): Promise<number> {
        try {
            return await this.prisma.courseAdmision.count({
                where: {
                    courseId,
                }
            });
        } catch (e) {
            throw new BadRequestException(`Course with ID ${courseId} not found`);
        }
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

    async findOne(id: number, lessons: boolean, teacher: boolean) {
        const course = await this.prisma.course.findUnique({
            where: { id },
            include: {
                lessons,
                teacher
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
