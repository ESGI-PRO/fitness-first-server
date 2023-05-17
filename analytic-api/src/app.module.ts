import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TrainingModule } from './training/training.module';

@Module({
  imports: [UsersModule, TrainingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
