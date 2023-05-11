import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LevelsService],
  controllers: [LevelsController]
})
export class LevelsModule {}
