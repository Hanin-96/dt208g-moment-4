import { Component } from '@angular/core';
import { CourseInfo } from '../models/course-info';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courses: CourseInfo[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

}
