import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {QuizComponent} from './components/quiz/quiz.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'table/courses/:cid/modules', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'table/courses/:cid/quizzes', component: QuizzesComponent},
  {path: 'courses/:cid/quizzes/:qid', component: QuizComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }