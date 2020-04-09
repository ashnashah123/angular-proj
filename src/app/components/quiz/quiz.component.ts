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
  questions = [
    {"_id": "123", "title": "JPA True False", "quizId": "234", "question":
    "JPA stands for Java Persistence API", "correct": "true", "type": "TRUE_FALSE"},
    {"_id": "234", "title": "JPA Multiple Choice", "quizId": "234", "question":
    "What does JPA stand for?", "correct": "Java Persistence API",
    "type": "MULTIPLE_CHOICE", "choices":
    ["Java Pseudo API", "Java Persistence API", "JSON Persistence API",
    "JavaScript Persistence API"]},    
  ]

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
