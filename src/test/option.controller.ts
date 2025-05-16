import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { OptionService } from './option.service';
import { Prisma } from '../../generated/prisma';
import { CreateOptionDto, UpdateOptionDto } from './dto/test.dto';

@Controller({
    path: 'options',
    version: '1'
})
export class OptionController {
    constructor(private readonly optionService: OptionService) { }

    @Post()
    create(@Body() createOptionDto: CreateOptionDto) {
        return this.optionService.create(createOptionDto);
    }

    @Get()
    findAll(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
        @Query('include') include?: string,
    ) {
        return this.optionService.findMany({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
            include: include ? JSON.parse(include) : undefined,
        });
    }

    @Get('test-stage/:testStageId')
    findByTestStageId(@Param('testStageId', ParseIntPipe) testStageId: number) {
        return this.optionService.findByTestStageId(testStageId);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.optionService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateOptionDto: UpdateOptionDto,
    ) {
        return this.optionService.update(id, updateOptionDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.optionService.remove(id);
    }
}