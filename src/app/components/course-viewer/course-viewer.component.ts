import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModuleServiceClient } from '../../services/ModuleServiceClient';
import { CourseServiceClient } from 'src/app/services/CourseServiceClient';
import { LessonServiceClient } from 'src/app/services/LessonServiceClient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit{

  title='Course Viewer Component'
  courseId
  // modules = []
  courseTitle

  constructor(private moduleService: ModuleServiceClient, 
    private courseService: CourseServiceClient, 
    private lessonService: LessonServiceClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['cid'];
    });
    
    this.courseService.findCourseById(this.courseId)
      .then(course => this.courseTitle = course.title);

    // this.moduleService.findModulesForCourse(this.courseId)
    //   .then(modules => {
    //     console.log("the returned modules: ", modules);
    //     this.modules = modules
    //     console.log("this.modules after setting: ", this.modules);
    //   });
  }

}