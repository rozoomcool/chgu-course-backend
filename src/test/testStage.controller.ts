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
import { TestStageService } from './testStage.service';
import { CreateTestStageDto, UpdateTestStageDto } from './dto/test.dto';

@Controller({ path: 'test-stages', version: '1' })
export class TestStageController {
    constructor(private readonly testStageService: TestStageService) { }

    @Post()
    create(@Body() createTestStageDto: CreateTestStageDto) {
        return this.testStageService.create(createTestStageDto);
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
        return this.testStageService.findMany({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
            include: include ? JSON.parse(include) : undefined,
        });
    }

    @Get('test/:testId')
    findByTestId(@Param('testId', ParseIntPipe) testId: number) {
        return this.testStageService.findByTestId(testId);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.testStageService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTestStageDto: UpdateTestStageDto,
    ) {
        return this.testStageService.update(id, updateTestStageDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.testStageService.remove(id);
    }
}