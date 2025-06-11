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
import { OptionService } from './option.service';
import { Prisma, Role } from '../../generated/prisma';
import { CreateOptionDto, UpdateOptionDto } from './dto/test.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CustomJwtAuthGuard } from 'src/auth/auth.guard';

@Controller({
    path: 'options',
    version: '1'
})
export class OptionController {
    constructor(private readonly optionService: OptionService) { }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @Post()
    create(@Body() createOptionDto: CreateOptionDto, @Request() req) {
        return this.optionService.create(createOptionDto, Number.parseInt(req.user.id));
    }

    @Get()
    findAll(
        @Query('skip') skip?: string,
        @Query('take') take?: string
    ) {
        return this.optionService.findMany({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined
        });
    }

    @Get('test-stage/:testStageId')
    findByTestStageId(@Param('testStageId', ParseIntPipe) testStageId: number) {
        return this.optionService.findByTestStageId(testStageId);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.optionService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateOptionDto: UpdateOptionDto,
    ) {
        return this.optionService.update(id, updateOptionDto);
    }

    @UseGuards(CustomJwtAuthGuard, RolesGuard)
    @Roles(Role.TEACHER, Role.ADMIN)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
        return this.optionService.remove(id, Number.parseInt(req.user.id));
    }
}