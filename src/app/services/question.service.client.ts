import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://guarded-anchorage-75909.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
