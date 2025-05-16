import { Injectable, OnModuleInit } from '@nestjs/common';
import { Role } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoaderService implements OnModuleInit {

    constructor(private readonly userService: UserService,
        private readonly prismaService: PrismaService
    ) { }

    async onModuleInit() {
        const email = "rosul.um@gmail.com";
        const password = "12345678";
        const role = Role.ADMIN;
        if (!await this.userService.findOne({ email })) {
            await this.userService.createUser({ email, password, role })
        }
        // await this.addCourse();
    }

    async addCourse() {
        try {

            const course = await this.prismaService.course.create({
                data: { title: "Javasctipt Beginner", description: "Hello World" }
            })
            const chapterOne = await this.prismaService.chapter.create({
                data: { title: "What is programming", courseId: course.id }
            })
            const chapterTwo = await this.prismaService.chapter.create({
                data: { title: "Html for beginners", courseId: course.id }
            })
            const chapterThree = await this.prismaService.chapter.create({
                data: { title: "Css styling", courseId: course.id }
            })
            const chapterFour = await this.prismaService.chapter.create({
                data: { title: "Making our first web page", courseId: course.id }
            })
            const chapterFive = await this.prismaService.chapter.create({
                data: { title: "Add dynamic with javascript", courseId: course.id }
            })
            const lesson = await this.prismaService.lesson.create({
                data: { title: "Hello World", chapterId: chapterOne.id }
            })
        } catch (e) {

        }
    }
}
