import { Module } from '@nestjs/common';
import { LessonAttachmentService } from './lessonAttachment.service';
import { LessonAttachmentController } from './lessonAttachment.controller';

@Module({
    providers: [LessonAttachmentService],
    controllers: [LessonAttachmentController]
})
export class LessonAttachmentModule { }
