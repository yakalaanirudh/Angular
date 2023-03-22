import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers: [EnrollService]
})
export class AngularComponent{
  title="Angular";

  constructor(private enrollService: EnrollService){

  }

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }
}


/*
VERSION 1
import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent{
  title="Angular";

  constructor(private enrollService: EnrollService){  //In constructor we have the object named enrollService which is of type from service file

  }

  OnEnroll(){
    const enrollService=new EnrollService();    //Creating an object of the enrollservice Serevice
    enrollService.OnEnrollClicked(this.title);   //in enrollservice object get OnEnrollClicked property and pass title argument to it
  }
}

*/


/*
VERSION 2
For javascript component and angular component enrollService is a dependency
Instead of creating an instance of the class in our componenet 
const enrollService=new EnrollService();
we can use dependency injector

To do that we create a constructor and insert the service parameter into it
we use private so that it is accessible to only this method
we add providers property to the component adn assign the service to it

import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers: [EnrollService]      //This provides an instance of that class to be used in onEnroll method
})
export class AngularComponent{
  title="Angular";

  constructor(private enrollService: EnrollService){  //In constructor we have the object named enrollService which is of type from service file

  }

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);   //in enrollservice object get OnEnrollClicked property and pass title argument to it
  }
}
*/


/*
VERSION 3

Since angular uses hierarchal injection and in our app we have angular and javascript components inside app componenet we add providers in
app componenet and instantiate the service in the app component constructor

Even better addition than in app component.ts file is to add the provider directly to app component.module.ts file
so that the provider will be accessible to all components in the app.

In angular the injection of dependencies is on a hierarchical order.
So, if we add a dependency to a component that dependency will be added to all its child components.
So if we add a dependency to have more children find then that dependency will 
be added to all its child components since app module is the highest level file in the hierarchy that dependency 
that is added on to the app module file will be available to the entire app on a global level.

if we add a dependency on a parent level and add the same dependency or any other dependency on a child level 
that child level dependency will override the parent level dependency in that child component and 
also in the children components of the child component.

*/