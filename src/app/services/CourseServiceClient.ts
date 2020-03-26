import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001702552/courses`)
      .then(response => response.json())
  
  findCourseById = (cid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001702552/courses/${cid}`)
        .then(response => response.json())
}