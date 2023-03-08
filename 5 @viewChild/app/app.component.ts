
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild('dobInput') dateOfBirth: ElementRef;
  @ViewChild('ageInput') age: ElementRef;
  @ViewChild(DemoComponent, {static: true}) demoComp: DemoComponent;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    // console.log(this.dateOfBirth);
    // console.log(this.age);
  }
}

/*
  @ViewChild('dobInput') dateOfBirth: ElementRef;
  'dobInput is the name of the template reference of the html tag and we store it a variable dateOfBirth

  Since The element we are storing references to a HTML element we assign its type as ElementRef

  The ElementRef has a native element which stores the userinout value hence
  this.dateOfBirth.nativeElement.value

*/

/*
  @ViewChild(DemoComponent, {static: true}) demoComp: DemoComponent;

  because we are importing an instance of that compoinent
  */