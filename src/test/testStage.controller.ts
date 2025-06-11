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
    UseGuards,
    Request
} from '@nestjs/common';
import { TestStageService } from './testStage.service';
import { CreateTestStageDto, UpdateTestStageDto } from './dto/test.dto';
import { CustomJwtAuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'generated/prisma';

@Controller({ path: 'test-stages', version: '1' })
export class TestStageController {
    constructor(private readonly testStageService: TestStageService) { }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @Post()
    create(@Body() createTestStageDto: CreateTestStageDto, @Request() req) {
        return this.testStageService.create(createTestStageDto, Number.parseInt(req.user.id));
    }

    @Get()
    findAll(
        @Query('skip') skip?: string,
        @Query('take') take?: string
    ) {
        return this.testStageService.findMany({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined
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

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
        return this.testStageService.remove(id, Number.parseInt(req.user.id));
    }
}