import { Body, Request, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseFilePipeBuilder, ParseIntPipe, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service';
import { Prisma, Role } from 'generated/prisma';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { ImageFileUploadInterceptor } from 'src/config/imageFileUpload.interceptor';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

// @UseInterceptors(new LoggingInterceptor())
@Controller({ path: 'course', version: '1' })
export class CourseController {
    constructor(
        private readonly courseService: CourseService
    ) { }

    @Post()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @UseInterceptors(ImageFileUploadInterceptor)
    async create(@UploadedFile(new ParseFilePipeBuilder()
        .build({
            errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })) file: Express.Multer.File, @Body() data: CreateCourseDto, @Request() req) {
        data.imageUrl = file.filename;
        try {
            return await this.courseService.create(data, req.user.id);
        } catch (e) {
            console.log(e);
            throw new HttpException("bad credentials", HttpStatus.BAD_REQUEST);
        }
    }

    @Get()
    findAll(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
    ) {
        return this.courseService.findMany({
            skip: skip ? parseInt(skip) : 0,
            take: take ? parseInt(take) : 10,
        });
    }

    @Get('all/teacher/:teacherId')
    findByTeacherId(
        @Param('teacherId', ParseIntPipe) teacherId: number,
    ) {
        return this.courseService.findMany({
            where: { teacherId },
        });
    }

    @Get("all")
    findAllDeep(
        @Query('skip') skip?: string,
        @Query('take') take?: string
    ) {
        return this.courseService.findManyDeep({
            skip: skip ? parseInt(skip) : 0,
            take: take ? parseInt(take) : 10,
        });
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.courseService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateCourseDto: UpdateCourseDto,
    ) {
        return this.courseService.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.courseService.remove(id);
    }
}
