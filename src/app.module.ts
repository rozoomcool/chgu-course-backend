import { HttpException, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LoaderModule } from './loader/loader.module';
import { CourseModule } from './course/course.module';
import configuration from './config/configuration';
import { extname, join } from 'path';
import { MulterModule } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterConfigService } from './config/multer.config';
import { ServeStaticConfigService } from './config/serve-static.config';
import { ChapterModule } from './chapter/chapter.module';
import { LessonModule } from './lesson/lesson.module';
import { LessonAttachmentModule } from './lesson-attachment/lesson-attachment.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [UserModule, PrismaModule, ConfigModule.forRoot({
    envFilePath: ".env.dev",
    load: [configuration]
  }),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useClass: ServeStaticConfigService,
      inject: [ConfigService]
    }),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useClass: MulterConfigService,
      inject: [ConfigService],
    }),
    AuthModule, LoaderModule, CourseModule, ChapterModule, LessonModule, LessonAttachmentModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }