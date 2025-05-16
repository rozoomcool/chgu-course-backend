import { Module } from '@nestjs/common';
import { LessonAttachmentService } from './lessonAttachment.service';
import { LessonAttachmentController } from './lessonAttachment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    providers: [LessonAttachmentService],
    controllers: [LessonAttachmentController],
    imports: [PrismaModule]
})
export class LessonAttachmentModule { }
