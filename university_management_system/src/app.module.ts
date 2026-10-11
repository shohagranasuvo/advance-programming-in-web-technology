import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { StudentsModule } from './students/students.module.js';
import { CourseModule } from './course/course.module.js';
import { ResourceModule } from './resource/resource.module.js';
import { SectionModule } from './section/section.module.js';

@Module({
  imports: [StudentsModule, CourseModule, ResourceModule, SectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

