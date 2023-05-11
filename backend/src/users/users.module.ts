import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ConfigModule } from '@nestjs/config';
import { AtStrategy } from 'src/auth/strategies';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [UsersService, AtStrategy],
  controllers: [UsersController]
})
export class UsersModule {}
