import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceClient } from 'src/app/services/question.service.client';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId = ''
  questions = []

  constructor(
    private service: QuestionServiceClient,
    private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.quizId = params['qid'];
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    })
  }
}
