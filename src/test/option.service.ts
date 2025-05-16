import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { CreateOptionDto, UpdateOptionDto } from './dto/test.dto';

@Injectable()
export class OptionService {
    constructor(private prisma: PrismaService) { }

    async create(createOptionDto: CreateOptionDto) {
        // Check if test stage exists
        const testStage = await this.prisma.testStage.findUnique({
            where: { id: createOptionDto.testStageId },
        });

        if (!testStage) {
            throw new NotFoundException(
                `Test stage with ID ${createOptionDto.testStageId} not found`,
            );
        }

        return this.prisma.option.create({
            data: createOptionDto,
        });
    }

    async findAll() {
        return this.prisma.option.findMany({
            include: {
                testStage: true,
                answerFor: true,
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
                answerFor: true,
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

    async remove(id: number) {
        try {
            return await this.prisma.option.delete({
                where: { id },
            });
        } catch (error) {
            throw new NotFoundException(`Option with ID ${id} not found`);
        }
    }
}