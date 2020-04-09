import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../../services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  courseId = ''
  quizzes = []

  constructor(
    private service: QuizServiceClient,
    private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['cid'];
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    })
  }
}
