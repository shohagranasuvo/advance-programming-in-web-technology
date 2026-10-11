import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ResourceService } from '../resource/resource.service.js';
import { SectionService } from '../section/section.service.js';

@Injectable()
export class CourseService {
  constructor(
    @Inject(forwardRef(() => ResourceService))
    private readonly resourceService: any,
    @Inject(forwardRef(() => SectionService))
    private readonly sectionService: any,
  ) {}

  getCourseInfo() {
    const sectionInfo = this.sectionService.getSectionInfo();
    return `Course Info: This is a Web Technology course. Linked Section Info: ${sectionInfo}`;
  }
}

