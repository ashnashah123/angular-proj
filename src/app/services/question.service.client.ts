import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    // fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
    fetch(`https://sleepy-tundra-69887.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
