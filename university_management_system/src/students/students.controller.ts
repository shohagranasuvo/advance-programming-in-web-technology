import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { StudentsService } from './students.service.js';

class Student {
  id: number;
  name: string;
  dept: string;
}

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('export')
  exportStudents() {
    return "Exporting all student resources...";
  }

  @Get('intra-department')
  intraDepartment() {
    return "Handling intra-department communication...";
  }

  @Get('inter-department')
  interDepartment() {
    return "Handling inter-department communication...";
  }

  @Get()
  getAllStudent() {
    return "All student List : ";
  }

  @Get(':id')
  getStudentById(@Param('id') id: string ) {
    return `All student Id: ${id}`;
  }

  @Get(':id/:name')
  getStudentByIdAndName(@Param('id') id: string, @Param('name') name: string, @Query('goat') goat?: boolean) {
    return `All student Id: ${id} and name is ${name} and Goat = ${goat} `;
  }

  @Post()
  postNewResource(@Body() student: Student) {
    if (!student || !student.id) {
      return {
        error: "Missing student data",
        message: "Please provide id, name, and dept in the JSON body",
      };
    }
    return `Student Details -> ID: ${student.id}, Name: ${student.name}, Dept: ${student.dept}`;
  }

  @Put(':id')
  updateStudent(@Param('id') id: string) {
    return `Student #${id} fully updated`;
  }

  @Patch(':id')
  partialUpdateStudent(@Param('id') id: string) {
    return `Student #${id} partially updated`;
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return `Student #${id} removed`;
  }
}
