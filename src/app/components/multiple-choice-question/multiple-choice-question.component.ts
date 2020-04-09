import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question

  @Input()
  answer = 'No answer yet'
  @Output()
  answerChange = new EventEmitter<string>()
  changeCorrectColor
  changeIncorrectColor
  selectedChoice

  submitAnswer = () => {
    this.answerChange.emit(this.answer)
    this.turnGreen()
  }

  turnGreen = () => {
    if (this.answer !== this.question.correct) {
      this.changeIncorrectColor = true
    } 
    this.changeCorrectColor = true
  }

  selectChoice = (choice) => {
    this.selectedChoice = choice
  }  

  ngOnInit(): void {
  }

}