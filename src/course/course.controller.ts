import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseFilePipeBuilder, ParseIntPipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service';
import { Prisma } from 'generated/prisma';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Controller({ path: 'course', version: '1' })
export class CourseController {
    constructor(
        private readonly courseService: CourseService
    ) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile(new ParseFilePipeBuilder()
        .addFileTypeValidator({
            fileType: /image\/(jpeg|png|webp|jpg)/,
            skipMagicNumbersValidation: true
        })
        .addMaxSizeValidator({
            maxSize: Math.pow(1024, 2) * 2
        })
        .build({
            errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })) file: Express.Multer.File, @Body() data: CreateCourseDto) {
        data.imageUrl = file.originalname;
        try {
            return await this.courseService.create(data);
        } catch (e) {
            throw new HttpException("bad credentials", HttpStatus.BAD_REQUEST);
        }
    }

    @Get()
    findAll(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: Prisma.CourseWhereUniqueInput,
        @Query('where') where?: Prisma.CourseWhereInput,
        @Query('orderBy') orderBy?: Prisma.CourseOrderByWithRelationInput,
    ) {
        return this.courseService.findMany({
            skip: skip ? parseInt(skip) : 0,
            take: take ? parseInt(take) : 10,
            cursor,
            where,
            orderBy,
        });
    }

    @Get("all")
    findAllDeep(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: Prisma.CourseWhereUniqueInput,
        @Query('where') where?: Prisma.CourseWhereInput,
        @Query('orderBy') orderBy?: Prisma.CourseOrderByWithRelationInput,
    ) {
        return this.courseService.findManyDeep({
            skip: skip ? parseInt(skip) : 0,
            take: take ? parseInt(take) : 10,
            cursor,
            where,
            orderBy,
        });
    }

    //     @Post()
    //   create(@Body() createCourseDto: CreateCourseDto) {
    //     return this.courseService.create(createCourseDto);
    //   }

    //   @Get()
    //   findAll() {
    //     return this.courseService.findAll();
    //   }

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
