import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/createChapter.dto';
import { UpdateChapterDto } from './dto/updateChapter.dto';

@Controller('chapters')
export class ChapterController {
    constructor(private readonly chapterService: ChapterService) { }

    @Post()
    create(@Body() createChapterDto: CreateChapterDto) {
        return this.chapterService.create(createChapterDto);
    }

    @Get()
    findAll() {
        return this.chapterService.findAll();
    }

    @Get('course/:courseId')
    findAllByCourseId(@Param('courseId', ParseIntPipe) courseId: number) {
        return this.chapterService.findAllByCourseId(courseId);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.chapterService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateChapterDto: UpdateChapterDto,
    ) {
        return this.chapterService.update(id, updateChapterDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.chapterService.remove(id);
    }
}