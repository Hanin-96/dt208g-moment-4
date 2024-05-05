import { Component } from '@angular/core';
import { CourseInfo } from '../models/course-info';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courses: CourseInfo[] = [];
  sortedCourses: CourseInfo[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.sortedCourses = courses;
    });
  }

  sort(type: string): void {
    this.sortedCourses = this.courses.sort((courseA, courseB) => {
      if(type === 'code') {
        return courseA.code.localeCompare(courseB.code);

      } else if(type=== 'coursename') {
        return courseA.coursename.localeCompare(courseB.coursename);

      } else {
        return courseA.progression.localeCompare(courseB.progression);
      }
      
    })
  }

}
