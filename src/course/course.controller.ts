import { Body, Request, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseFilePipeBuilder, ParseIntPipe, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors, ParseBoolPipe, Put, Logger } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseAdmissionState, Prisma, Role } from 'generated/prisma';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { ImageFileUploadInterceptor } from 'src/config/imageFileUpload.interceptor';
import { CustomJwtAuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

// @UseInterceptors(new LoggingInterceptor())
@Controller({ path: 'course', version: '1' })
export class CourseController {
    constructor(
        private readonly courseService: CourseService,
    ) { }
    private readonly logger = new Logger(CourseController.name, { timestamp: true });
    
    @Post()
    @UseGuards(CustomJwtAuthGuard, RolesGuard)
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

    @Delete(":courseId/lesson/:lessonId")
    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    async deleteLesson(@Param('courseId', ParseIntPipe) courseId: number, @Param('lessonId', ParseIntPipe) lessonId: number, @Request() req) {
        try {
            return await this.courseService.deleteLesson(courseId, lessonId, Number.parseInt(req.user.id));
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

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.STUDENT, Role.ADMIN)
    @Post(":courseId/admission")
    addAdmission(
        @Request() req,
        @Param("courseId", ParseIntPipe) courseId: number
    ) {
        return this.courseService.addAdmission(courseId, Number.parseInt(req.user.id));
    }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @Put(":courseId/admission/user/:userId")
    changeAdmission(
        @Request() req,
        @Param("courseId", ParseIntPipe) courseId: number,
        @Param("userId", ParseIntPipe) userId: number,
        @Query("admissionState") admissionState: CourseAdmissionState
    ) {
        return this.courseService.changeAdmissionState({ courseId, userId, admissionState, ownerId: Number.parseInt(req.user.id) });
    }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.STUDENT, Role.ADMIN)
    @Get(":courseId/admission/user/")
    getMyAdmission(
        @Request() req,
        @Param("courseId", ParseIntPipe) courseId: number
    ) {
        return this.courseService.getUserCourseAdmission(courseId, Number.parseInt(req.user.id));
    }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @Get(":courseId/admission")
    getAllAdmissionsByCourse(
        @Request() req,
        @Param("courseId", ParseIntPipe) courseId: number,
    ) {
        return this.courseService.getAllAdmissionByCourse(courseId);
    }

    @UseGuards(CustomJwtAuthGuard)
    // @Roles(Role.STUDENT, Role.ADMIN)
    @Get("user/admissions")
    getAllAdmissionsByUser(
        @Request() req
    ) {
        this.logger.log("|||||")
        return this.courseService.getStudentAdmissionsWithCourses(Number.parseInt(req.user.id));
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
    findOne(@Param('id', ParseIntPipe) id: number,
        @Query('teacher') teacher: boolean = false,
        @Query('lessons') lessons: boolean = false,
    ) {
        return this.courseService.findOne(id, lessons, teacher);
    }

    @Put(':id')
    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @UseInterceptors(ImageFileUploadInterceptor)
    update(
        @Param('id', ParseIntPipe) id: number,
        @UploadedFile(new ParseFilePipeBuilder()
            .build({
                fileIsRequired: false,
                errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
            })) file: Express.Multer.File | null,
        @Body() updateCourseDto: UpdateCourseDto,
        @Request() req
    ) {
        if (file != null) {
            updateCourseDto.imageUrl = file.filename;
        }
        return this.courseService.update(id, Number.parseInt(req.user.id), updateCourseDto);
    }

    @Delete('delete/:id')
    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
        this.logger.log("|||||||")
        return this.courseService.remove(id, Number.parseInt(req.user.id));
    }
}
