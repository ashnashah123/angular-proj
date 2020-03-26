import { Component, OnInit, Input } from '@angular/core';
import { ModuleServiceClient } from 'src/app/services/ModuleServiceClient';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LessonServiceClient } from 'src/app/services/LessonServiceClient';


@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courseId = ''
  selectedModuleId = ''
  title = "Module List Component"
  newModuleTitle = ''
  modules = []


  selectModule = (moduleId) => {
    this.selectedModuleId = moduleId;
    // this.lessonService.findLessonsForModule(this.selectedModuleId);
    this.router.navigate(['table/courses/',this.courseId,'/modules',this.selectedModuleId,'/lessons'])
  }
    

  constructor(
    private moduleService: ModuleServiceClient, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonServiceClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['cid'];
    });

    this.moduleService.findModulesForCourse(this.courseId)
      .then(modules => {
        this.modules = modules
      });
    
  }

}