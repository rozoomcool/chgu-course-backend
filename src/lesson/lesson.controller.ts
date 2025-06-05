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
  UseGuards,
  Request,
  Put
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto, UpdateLessonDto } from './dto/lesson.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'generated/prisma';

@Controller({
  path: 'lessons',
  version: '1'
})
export class LessonController {
  constructor(private readonly lessonService: LessonService) { }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.TEACHER, Role.ADMIN)
  @Post()
  create(@Body() createLessonDto: CreateLessonDto, @Request() req) {
    return this.lessonService.create(createLessonDto, Number.parseInt(req.user.id));
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string
  ) {
    return this.lessonService.findMany({
      skip: skip ? parseInt(skip) : 0,
      take: take ? parseInt(take) : 10
    });
  }

  @Get('course/:courseId')
  findAllByCourseId(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.lessonService.findAllByCourseId(courseId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lessonService.findOne(id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.TEACHER, Role.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLessonDto: UpdateLessonDto,
    @Request() req
  ) {
    return this.lessonService.update(id, Number.parseInt(req.user.id), updateLessonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lessonService.remove(id);
  }
}