import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`http://secure-tundra-22276.herokuapp.com/api/quizzes/${qid}/questions`)
    // fetch(`https://secure-tundra-22276.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
