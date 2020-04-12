import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    // fetch('http://localhost:3000/api/quizzes')
    fetch('https://sleepy-tundra-69887.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    // fetch(`http://localhost:3000/api/quizzes/${qid}`)
    fetch(`https://sleepy-tundra-69887.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
