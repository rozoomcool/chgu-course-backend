import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TestStageService } from './testStage.service';
import { OptionService } from './option.service';
import { TestStageController } from './testStage.controller';
import { OptionController } from './option.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [TestService, TestStageService, OptionService],
  controllers: [TestController, TestStageController, OptionController],
  imports: [PrismaModule]
})
export class TestModule { }
