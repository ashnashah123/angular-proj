import { Component, OnInit } from '@angular/core';
import { ModuleServiceClient } from 'src/app/services/ModuleServiceClient';


@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  selectedModule 
  title = "Module List Component"
  newModuleTitle = ''
  modules = [
    {_id: '123', title: 'Module A'},
    {_id: '234', title: 'Module B'},
    {_id: '345', title: 'Module C'},
    {_id: '456', title: 'Module D'}
  ]

  deleteModule = (moduleToDelete) =>
  this.modules = this.modules.filter(module => module !== moduleToDelete)

  createModule = (title) =>
    this.modules.push({_id: '321', title})

  selectModule = (module) =>
    this.selectedModule = module

  constructor(private service: ModuleServiceClient) { }

  ngOnInit(): void {
    // this.service.findModulesForCourse('123')
    //   .then(modules => this.modules = modules);
    
  }

}