import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'course/:cid', component: CourseViewerComponent},
  {path: 'modules', component: ModuleListComponent},
  {path: 'lessons', component: LessonTabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }