// test.controller.ts
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
import { TestService } from './test.service';
import { Prisma } from '../../generated/prisma';
import { CreateTestDto, UpdateTestDto } from './dto/test.dto';

@Controller('tests')
export class TestController {
    constructor(private readonly testService: TestService) { }

    @Post()
    create(@Body() createTestDto: CreateTestDto) {
        return this.testService.create(createTestDto);
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
        return this.testService.findMany({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
            include: include ? JSON.parse(include) : undefined,
        });
    }

    @Get('lesson/:lessonId')
    findByLessonId(@Param('lessonId', ParseIntPipe) lessonId: number) {
        return this.testService.findByLessonId(lessonId);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.testService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTestDto: UpdateTestDto,
    ) {
        return this.testService.update(id, updateTestDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.testService.remove(id);
    }
}