import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse';
  message="Angular is a javascript framework to build client side applications."
}


/*
In Angular the
app.component.css
app.component.html        This is also called view template
app.component.ts
app.component.spec.ts     This is used for testing components

make a component
*/

/*
In the index.html file there is that   <app-root></app-root> tag

In app.component.ts we have @Component decorator object 
which uses app.component.html and app.component.css for rendering
This object aslso has a selector property to tell the index.html file what to render


*/