import { Module } from '@nestjs/common';
import { MaturityService } from './maturity.service';
import { MaturityController } from './maturity.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MaturityService],
  controllers: [MaturityController]
})
export class MaturityModule {}
