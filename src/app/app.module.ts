import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { LessonServiceClient } from './services/LessonServiceClient';
import { QuizServiceClient } from './services/quiz.service.client';
import { QuestionServiceClient } from './services/question.service.client';

import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './components/true-false-question/true-false-question.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }