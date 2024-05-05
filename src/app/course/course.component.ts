import { Component } from '@angular/core';
import { CourseInfo } from '../models/course-info';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  
  courses: CourseInfo[] = [];
  sortedCourses: CourseInfo[] = [];

  //Input i sökfältet
  filterValue: string = "";

  constructor(private courseService: CourseService) { }

  //Hämta kurser
  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.sortedCourses = courses;
    });
  }

  //Sortera efter code, coursename och progression
  sort(type: string): void {
    this.sortedCourses = this.courses.sort((courseA, courseB) => {
      if (type === 'code') {
        return courseA.code.localeCompare(courseB.code);

      } else if (type === 'coursename') {
        return courseA.coursename.localeCompare(courseB.coursename);

      } else {
        return courseA.progression.localeCompare(courseB.progression);
      }

    })
  }

  //Filtrera efter input i sökfält
  applyFilter() {
    this.sortedCourses = this.courses.filter((course) => {
      return course.code.toLowerCase().includes(this.filterValue.toLowerCase())
      || course.coursename.toLowerCase().includes(this.filterValue.toLowerCase())
     });
  }

}
