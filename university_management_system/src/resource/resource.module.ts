import { Module, forwardRef } from '@nestjs/common';
import { ResourceService } from './resource.service.js';
import { ResourceController } from './resource.controller.js';
import { CourseModule } from '../course/course.module.js';

@Module({
  imports: [forwardRef(() => CourseModule)],
  controllers: [ResourceController],
  providers: [ResourceService],
  exports: [ResourceService],
})
export class ResourceModule {}
