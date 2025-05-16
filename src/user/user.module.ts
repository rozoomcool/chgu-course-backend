import { Module } from '@nestjs/common';
import { UserService as UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    providers: [UserService],
    controllers: [UserController],
    imports: [PrismaModule],
    exports: [UserService]
})
export class UserModule {}
