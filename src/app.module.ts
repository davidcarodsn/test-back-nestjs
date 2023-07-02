import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingController } from './testing/testing.controller';
import { TestingService } from './testing/testing.service';

@Module({
  imports: [],
  controllers: [AppController, TestingController],
  providers: [AppService, TestingService],
})
export class AppModule {}
