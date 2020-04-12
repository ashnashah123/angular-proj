import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://guarded-anchorage-75909.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://guarded-anchorage-75909.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
