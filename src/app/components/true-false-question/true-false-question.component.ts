// import { Component, OnInit, Input } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question
  @Input()
  answer = 'No answer yet'
  @Output()
  answerChange = new EventEmitter<string>()
  @Input()
  correct

  changeCorrectColor = false
  changeIncorrectColor = false
  choices = ["true", "false"]
  selectedChoice = ''

  submitAnswer = () => {
    this.answerChange.emit(this.answer)
    this.turnGreen()
  }

  turnGreen = () => {
    if (this.answer !== this.correct) {
      this.changeIncorrectColor = true
    } 
    this.changeCorrectColor = true
  }

  selectChoice = (choice) => {
    this.selectedChoice = choice
  }  

  constructor() { }

  ngOnInit(): void {
  }

}