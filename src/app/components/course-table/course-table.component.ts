import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})

export class CourseTableComponent implements OnInit {

  selectedCourseId = ''
  title = 'Course Table Component'
  newCourseTitle = ''
  courses = []

  deleteCourse = (courseToDelete) =>
    this.courses = this.courses.filter(course => course !== courseToDelete)

  createCourse = (title) =>
    this.courses.push({_id: '321', title})

  selectCourse = (courseId) => {
    this.selectedCourseId = courseId;
    this.router.navigate(['table/courses/',this.selectedCourseId,'/modules'])
  }
    
    

  constructor(
    private service: CourseServiceClient,
    private router: Router) { }

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}