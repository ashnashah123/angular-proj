import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceClient } from 'src/app/services/question.service.client';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input()
  question = {_id: '', title: '', type: '', choices: [], correct: '', question: ''}
  @Input()
  answer = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.answer)
 
  quizId = ''
  questions = []
  grade = 0
  doneGrading = false

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

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => this.grade = result.score)
      this.doneGrading = true
   }
   
}