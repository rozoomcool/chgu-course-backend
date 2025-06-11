import { Controller, Get, Patch, Body, UseInterceptors, UploadedFile, UseGuards, Request } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ImageFileUploadInterceptor } from 'src/config/imageFileUpload.interceptor';
import { ConfigService } from '@nestjs/config';
import { CustomJwtAuthGuard } from 'src/auth/auth.guard';

@Controller('profile')
export class ProfileController {
    constructor(
        private readonly profileService: ProfileService,
    ) { }

    @Get()
    async findOne(@Request() req) {
        return this.profileService.findOne(req.user.id);
    }

    // @Patch()
    // async update(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
    //     return this.profileService.update(req.user.id, updateProfileDto);
    // }

    @Patch('avatar')
    @UseInterceptors(ImageFileUploadInterceptor)
    async updateAvatar(@Request() req, @UploadedFile() file: Express.Multer.File) {
        const avatarUrl = file.filename;
        return this.profileService.updateAvatar(req.user.id, avatarUrl);
    }
} 