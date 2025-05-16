// lesson-attachment.controller.ts
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
import { Prisma } from '../../generated/prisma';
import { LessonAttachmentService } from './lessonAttachment.service';
import { CreateLessonAttachmentDto, UpdateLessonAttachmentDto } from './dto/lessonAttachment.dto';

@Controller('lesson-attachments')
export class LessonAttachmentController {
    constructor(private readonly lessonAttachmentService: LessonAttachmentService) { }

    @Post()
    create(@Body() createLessonAttachmentDto: CreateLessonAttachmentDto) {
        return this.lessonAttachmentService.create(createLessonAttachmentDto);
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
        return this.lessonAttachmentService.findMany({
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
        return this.lessonAttachmentService.findByLessonId(lessonId);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.lessonAttachmentService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateLessonAttachmentDto: UpdateLessonAttachmentDto,
    ) {
        return this.lessonAttachmentService.update(id, updateLessonAttachmentDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.lessonAttachmentService.remove(id);
    }
}