import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';

@Injectable()
export class ResourceService {
  constructor(
    @Inject(forwardRef(() => CourseService))
    private readonly courseService: any,
  ) {}

  getResourceInfo() {
    return 'Resource information retrieved';
  }
}
