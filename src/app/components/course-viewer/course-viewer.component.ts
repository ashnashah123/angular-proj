import { Component, OnInit } from '@angular/core';
import { ModuleServiceClient } from '../../services/ModuleServiceClient';


@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  title='Course Viewer Component'
  newModuleTitle = ''
  cid = ''
  modules = [
    {_id: '123', title: 'Module A'},
    {_id: '234', title: 'Module B'},
    {_id: '345', title: 'Module C'},
    {_id: '456', title: 'Module D'},
  ]

  createModule = (title) =>
    this.modules.push({_id: '321', title})

  constructor(private service: ModuleServiceClient) { }

  ngOnInit(): void {
    // this.service.findModulesForCourse(this.cid)
      // .then(modules => this.modules = modules);
  }

}