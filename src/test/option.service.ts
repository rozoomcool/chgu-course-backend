import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CreateOptionDto, UpdateOptionDto } from './dto/test.dto';

@Injectable()
export class OptionService {
    constructor(private prisma: PrismaService) { }

    async create(createOptionDto: CreateOptionDto, creatorId: number) {
        // Check if test stage exists
        const testStage = await this.prisma.testStage.findUnique({
            where: { id: createOptionDto.testStageId },
        });

        if (!testStage) {
            throw new NotFoundException(
                `Test stage with ID ${createOptionDto.testStageId} not found`,
            );
        }

        const test = await this.prisma.test.findUnique({
            where: { id: testStage.testId }
        })

        if (!test) {
            throw new NotFoundException(
                `Test with ID ${testStage.testId} not found`,
            );
        }

        if (test.ownerId != creatorId) {
            throw new NotAcceptableException("User is not owner of this test");
        }

        return this.prisma.option.create({
            data: createOptionDto,
        });
    }

    async findAll() {
        return this.prisma.option.findMany({
            include: {
                testStage: true,
            },
        });
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.OptionWhereUniqueInput;
        where?: Prisma.OptionWhereInput;
        orderBy?: Prisma.OptionOrderByWithRelationInput;
        include?: Prisma.OptionInclude;
    }) {
        const { skip, take, cursor, where, orderBy, include } = params;
        return this.prisma.option.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include,
        });
    }

    async findOne(id: number) {
        const option = await this.prisma.option.findUnique({
            where: { id },
            include: {
                testStage: true,
            },
        });

        if (!option) {
            throw new NotFoundException(`Option with ID ${id} not found`);
        }

        return option;
    }

    async findByTestStageId(testStageId: number) {
        // Check if test stage exists
        const testStage = await this.prisma.testStage.findUnique({
            where: { id: testStageId },
        });

        if (!testStage) {
            throw new NotFoundException(`Test stage with ID ${testStageId} not found`);
        }

        return this.prisma.option.findMany({
            where: { testStageId },
        });
    }

    async update(id: number, updateOptionDto: UpdateOptionDto) {
        try {
            return await this.prisma.option.update({
                where: { id },
                data: updateOptionDto,
            });
        } catch (error) {
            throw new NotFoundException(`Option with ID ${id} not found`);
        }
    }

    async remove(id: number, creatorId: number) {
        try {
            const option = await this.prisma.option.findUnique({
                where: { id: id }
            })

            if (!option) {
                throw new NotFoundException(
                    `Option with ID ${id} not found`,
                );
            }

            const testStage = await this.prisma.testStage.findUnique({
                where: { id: option.testStageId },
            });

            if (!testStage) {
                throw new NotFoundException(
                    `Test stage with ID ${option.testStageId} not found`,
                );
            }

            const test = await this.prisma.test.findUnique({
                where: { id: testStage.testId }
            })

            if (!test) {
                throw new NotFoundException(
                    `Test with ID ${testStage.testId} not found`,
                );
            }

            if (test.ownerId != creatorId) {
                throw new NotAcceptableException("User is not owner of this test");
            }

            return await this.prisma.option.delete({
                where: { id },
            });
        } catch (error) {
            throw new NotFoundException(`Option with ID ${id} not found`);
        }
    }
}