import { Controller, Get } from '@nestjs/common';
import { TestingService } from './testing.service';

@Controller('api/testing')
export class TestingController {
  private service = new TestingService();

  @Get()
  helloWorld() {
    return this.service.helloWorld();
  }
}
