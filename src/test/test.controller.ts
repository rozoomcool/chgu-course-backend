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
    UseGuards,
    Request
} from '@nestjs/common';
import { TestService } from './test.service';
import { Prisma, Role } from '../../generated/prisma';
import { CreateTestDto, UpdateTestDto } from './dto/test.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CustomJwtAuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller({ path: 'tests', version: '1' })
export class TestController {
    constructor(private readonly testService: TestService) { }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @Post()
    create(@Body() createTestDto: CreateTestDto, @Request() req) {
        return this.testService.addTestToLesson(createTestDto, Number.parseInt(req.user.id));
    }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Get()
    findAll(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
    ) {
        return this.testService.findMany({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
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