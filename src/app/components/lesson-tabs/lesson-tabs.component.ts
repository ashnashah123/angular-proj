import { Component, OnInit } from '@angular/core';
import { LessonServiceClient } from 'src/app/services/LessonServiceClient';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  courseId = ''
  moduleId = ''
  selectedLessonId = ''
  title = 'Lesson Tabs Component'
  newLessonTitle = ''
  lessons = []

  selectLesson = (lessonId) => {
    this.selectedLessonId = lessonId;
    this.router.navigate(['table/courses/',this.courseId,'/modules',this.moduleId,'/lessons',this.selectedLessonId,'/topics'])
  }

  constructor(
    private lessonService: LessonServiceClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['cid']
      this.moduleId = params['mid']
      this.lessonService.findLessonsForModule(this.moduleId)
      .then(lessons => this.lessons = lessons);
    })

  }

}
