import { Module } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { IndicatorsController } from './indicators.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [IndicatorsService],
  controllers: [IndicatorsController]
})
export class IndicatorsModule {}
