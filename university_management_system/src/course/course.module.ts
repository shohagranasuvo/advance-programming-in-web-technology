import { Module, forwardRef } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CourseController } from './course.controller.js';
import { StudentsModule } from '../students/students.module.js';
import { ResourceModule } from '../resource/resource.module.js';
import { SectionModule } from '../section/section.module.js';

@Module({
  imports: [
    StudentsModule,
    forwardRef(() => ResourceModule),
    forwardRef(() => SectionModule),
  ],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
