import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';

@Injectable()
export class SectionService {
  constructor(
    @Inject(forwardRef(() => CourseService))
    private readonly courseService: any,
  ) {}

  getSectionInfo() {
    return 'Section A: Morning Batch';
  }

  getSectionDetails() {
    const courseInfo = this.courseService.getCourseInfo();
    return `Section Details: ${this.getSectionInfo()} | Course Link: ${courseInfo}`;
  }
}
