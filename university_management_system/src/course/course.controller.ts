import { Controller, Post, Body, Get } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('info')
  getCourseInfo() {
    return this.courseService.getCourseInfo();
  }

  @Post('import')
  importCourse(@Body() courseData: any) {
    return "Importing courses...";
  }
}
