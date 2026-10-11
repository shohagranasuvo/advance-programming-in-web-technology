import { Controller, Get } from '@nestjs/common';
import { SectionService } from './section.service.js';

@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get()
  findAll() {
    return this.sectionService.getSectionInfo();
  }

  @Get('details')
  getDetails() {
    return this.sectionService.getSectionDetails();
  }
}
