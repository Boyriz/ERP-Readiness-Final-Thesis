import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AtGuard } from './common/decorators/guards';
import { APP_GUARD } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { AssessmentsModule } from './assessments/assessments.module';
import { LevelsModule } from './levels/levels.module';
import { IndicatorsModule } from './indicators/indicators.module';
import { OptionsModule } from './options/options.module';
import { ScoresModule } from './scores/scores.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { ReadinessModule } from './readiness/readiness.module';
import { MaturityModule } from './maturity/maturity.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [AuthModule, 
            PrismaModule, 
            UsersModule, 
            AssessmentsModule, 
            LevelsModule, 
            IndicatorsModule, 
            OptionsModule, 
            ScoresModule, 
            RecommendationsModule, ReadinessModule, MaturityModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AtGuard
  }],
})
export class AppModule {}
