import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/jannunzi/courses`)
      .then(response => response.json())
  
  findCourseById = (cid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${cid}`)
        .then(response => response.json())
}