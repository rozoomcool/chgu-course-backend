import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CreateTestStageDto, UpdateTestStageDto } from './dto/test.dto';

@Injectable()
export class TestStageService {
    constructor(private prisma: PrismaService) { }

    async create(createTestStageDto: CreateTestStageDto, creatorId: number) {
        // Check if test exists
        const test = await this.prisma.test.findUnique({
            where: { id: createTestStageDto.testId },
        });

        if (!test) {
            throw new NotFoundException(
                `Test with ID ${createTestStageDto.testId} not found`,
            );
        }

        if (test.ownerId != creatorId) {
            throw new NotAcceptableException("User is not owner of this test");
        }

        return await this.prisma.testStage.create({
            data: {
                ...createTestStageDto,
            },
            include: {
                options: true,
            },
        });
    }

    async findAll() {
        return this.prisma.testStage.findMany({
            include: {
                test: true,
                options: true,
            },
        });
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TestStageWhereUniqueInput;
        where?: Prisma.TestStageWhereInput;
        orderBy?: Prisma.TestStageOrderByWithRelationInput;
        include?: Prisma.TestStageInclude;
    }) {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.testStage.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async findOne(id: number) {
        const testStage = await this.prisma.testStage.findUnique({
            where: { id },
            include: {
                test: true,
                options: true,
            },
        });

        if (!testStage) {
            throw new NotFoundException(`Test stage with ID ${id} not found`);
        }

        return testStage;
    }

    async findByTestId(testId: number) {
        // Check if test exists
        const test = await this.prisma.test.findUnique({
            where: { id: testId },
        });

        if (!test) {
            throw new NotFoundException(`Test with ID ${testId} not found`);
        }

        return this.prisma.testStage.findMany({
            where: { testId },
            include: {
                options: true,
            },
        });
    }

    async update(id: number, updateTestStageDto: UpdateTestStageDto) {
        try {
            return await this.prisma.testStage.update({
                where: { id },
                data: updateTestStageDto,
                include: {
                    options: true,
                },
            });
        } catch (error) {
            throw new NotFoundException(`Test stage with ID ${id} not found`);
        }
    }

    async remove(id: number, creatorId: number) {
        try {
            return await this.prisma.testStage.delete({
                where: { id },
            });
        } catch (error) {
            throw new NotFoundException(`Test stage with ID ${id} not found`);
        }
    }
}