import { Component, OnInit } from '@angular/core';
import { LessonServiceClient } from 'src/app/services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  selectedLesson
  title = 'Lesson Tabs Component'
  newLessonTitle = ''
  lessons = [
    {_id: '123', title: 'Lesson A', 
      topics: [
        {_id: '123', title: 'Topic A'},
        {_id: '234', title: 'Topic B'},
        {_id: '345', title: 'Topic C'}
      ]
    },
    {_id: '234', title: 'Lesson B', 
    topics: [
        {_id: '567', title: 'Topic D'},
        {_id: '678', title: 'Topic E'},
        {_id: '789', title: 'Topic F'}
      ]
    },
    {_id: '345', title: 'Lesson C', 
    topics: [
        {_id: '1234', title: 'Topic G'},
        {_id: '2345', title: 'Topic H'},
        {_id: '3456', title: 'Topic I'}
      ]
    },
  ]
  constructor(private service: LessonServiceClient) { }

  ngOnInit(): void {

  }

}
