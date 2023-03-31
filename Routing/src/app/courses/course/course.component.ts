import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CoursesService, private route: ActivatedRoute) { }

  course;  
  courseId: number;

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    //this.courseId = this.route.snapshot.params['name'];
    this.course = this.service.courses.find(x => x.id == this.courseId);
  }

}

/*
From the constructor's route paramter we get the current activated route

We have an array named courses.

in this array every element is an object off type course.

The properties of this element course are of course name price author description 
and an URL that is pointing to the image file in the file storage.

All these courses are displayed in a great in the courses component.

Every course has a button to enter the view component for that particular course 
and this button is paid with a function that displays the entire view material of that course.

To the function that is invoked when we click that particular button for that course 
the idea of that course is passed as a parameter.

In the individual course component TypeScript file we kept the ID parameter in the URL 
which is the last part of the URL from a property called snapshot.

We assign this ID to a play property in this file.

All the courses are stored in a service file which is accessed as an instance in this file.

Now by using the find function we filter through all these courses to find the course 
which has the ID that matches the ID that we got from this snapshot property of TypeScript.

The course we got got is used to string interpolate the cpurse component
*/