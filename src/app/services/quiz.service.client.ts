import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('http://secure-tundra-22276.herokuapp.com/api/quizzes')
    // fetch('https://secure-tundra-22276.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`http://secure-tundra-22276.herokuapp.com/api/quizzes/${qid}`)
    // fetch(`https://secure-tundra-22276.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
