import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},             //In url if we type rooturl home component displayed
  {path: 'Home', component: HomeComponent},         //In url if we type rooturl/Home home component displayed
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Courses', component: CoursesComponent},
  {path: 'Course/:id', component: CourseComponent}    //:id is a place holder
  //{path: '**', component: ErrorComponent}       //To display a component when the url is not found it should always be the last component
]
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)   //This RouterModule .forRoot(appRoutes) gives us the component named router-outlet
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
/ is absolute path  that is new path =root path+appended component
when we assign the route as routerLink="/About" the /about is appended to the root url
i.e
/root  becomes  /root/about

If we do not use / then it is relative path
when we assign the route as routerLink="About" and when we are in  courses tab and click on about the url is appended relatively
i.e
/root/courses  becomes  /root/coursesabout


If we use ./About then also a relative path is followed


../About it goes one level up (like command prompt)  and since one level up is root 
About is appended to root
So it becomes root/About
*/