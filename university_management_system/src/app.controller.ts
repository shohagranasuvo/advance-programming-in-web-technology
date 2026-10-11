import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("result")
  getResult(): string {
    return "Get Result";
  }
  @Get("get")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getHello0(): string {
    return this.appService.getHello();
  }
  

  
}
