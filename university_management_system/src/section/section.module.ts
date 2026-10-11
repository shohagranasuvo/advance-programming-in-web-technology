import { Module, forwardRef } from '@nestjs/common';
import { SectionService } from './section.service.js';
import { SectionController } from './section.controller.js';
import { CourseModule } from '../course/course.module.js';

@Module({
  imports: [forwardRef(() => CourseModule)],
  controllers: [SectionController],
  providers: [SectionService],
  exports: [SectionService],
})
export class SectionModule {}
