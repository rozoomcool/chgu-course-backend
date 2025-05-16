// test.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CreateTestDto, UpdateTestDto } from './dto/test.dto';

@Injectable()
export class TestService {
    constructor(private prisma: PrismaService) { }

    async create(createTestDto: CreateTestDto) {
        if (createTestDto.lessonId) {
            // Check if lesson exists
            const lesson = await this.prisma.lesson.findUnique({
                where: { id: createTestDto.lessonId },
            });

            if (!lesson) {
                throw new NotFoundException(
                    `Lesson with ID ${createTestDto.lessonId} not found`,
                );
            }

            // Check if test already exists for this lesson
            const existingTest = await this.prisma.test.findUnique({
                where: { lessonId: createTestDto.lessonId },
            });

            if (existingTest) {
                throw new Error(
                    `Test already exists for lesson with ID ${createTestDto.lessonId}`,
                );
            }
        }

        return this.prisma.test.create({
            data: createTestDto,
        });
    }

    async findAll() {
        return this.prisma.test.findMany({
            include: {
                lesson: true,
                testStages: {
                    include: {
                        options: true,
                        answer: true,
                    },
                },
            },
        });
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TestWhereUniqueInput;
        where?: Prisma.TestWhereInput;
        orderBy?: Prisma.TestOrderByWithRelationInput;
        include?: Prisma.TestInclude;
    }) {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.test.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async findOne(id: number) {
        const test = await this.prisma.test.findUnique({
            where: { id },
            include: {
                lesson: true,
                testStages: {
                    include: {
                        options: true,
                        answer: true,
                    },
                },
            },
        });

        if (!test) {
            throw new NotFoundException(`Test with ID ${id} not found`);
        }

        return test;
    }

    async findByLessonId(lessonId: number) {
        const test = await this.prisma.test.findUnique({
            where: { lessonId },
            include: {
                lesson: true,
                testStages: {
                    include: {
                        options: true,
                        answer: true,
                    },
                },
            },
        });

        if (!test) {
            throw new NotFoundException(`Test for lesson with ID ${lessonId} not found`);
        }

        return test;
    }

    async update(id: number, updateTestDto: UpdateTestDto) {
        try {
            return await this.prisma.test.update({
                where: { id },
                data: updateTestDto,
            });
        } catch (error) {
            throw new NotFoundException(`Test with ID ${id} not found`);
        }
    }

    async remove(id: number) {
        try {
            return await this.prisma.test.delete({
                where: { id },
            });
        } catch (error) {
            throw new NotFoundException(`Test with ID ${id} not found`);
        }
    }
}