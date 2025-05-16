import { Module } from '@nestjs/common';
import { LoaderService } from './loader.service';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [LoaderService],
  imports: [UserModule, PrismaModule]
})
export class LoaderModule {}
