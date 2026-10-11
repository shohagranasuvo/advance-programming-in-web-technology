import { Controller, Get } from '@nestjs/common';
import { PublicService } from './public.service.js';

@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get()
  findAll() {
    return this.publicService.findAll();
  }
}
