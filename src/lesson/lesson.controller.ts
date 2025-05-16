// lesson.controller.ts (обновленный)
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
  import { LessonService } from './lesson.service';
  import { Prisma } from '../../generated/prisma';
import { CreateLessonDto, UpdateLessonDto } from './dto/lesson.dto';
  
  @Controller('lessons')
  export class LessonController {
    constructor(private readonly lessonService: LessonService) {}
  
    @Post()
    create(@Body() createLessonDto: CreateLessonDto) {
      return this.lessonService.create(createLessonDto);
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
      return this.lessonService.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? JSON.parse(cursor) : undefined,
        where: where ? JSON.parse(where) : undefined,
        orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        include: include ? JSON.parse(include) : undefined,
      });
    }
  
    @Get('chapter/:chapterId')
    findAllByChapterId(@Param('chapterId', ParseIntPipe) chapterId: number) {
      return this.lessonService.findAllByChapterId(chapterId);
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.lessonService.findOne(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateLessonDto: UpdateLessonDto,
    ) {
      return this.lessonService.update(id, updateLessonDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.lessonService.remove(id);
    }
  }