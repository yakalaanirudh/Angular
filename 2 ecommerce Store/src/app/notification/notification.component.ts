import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}"> 
                This website uses cookies to provide better user experience.
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align:center;}", 
          "p{font-size: 14px;}", ".close{float: right; margin-top: -15px;}",
          ".fadeOut {visibility: hidden;opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification:boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}


/*
We can use template instead of template url

If we use template then we type the html of the file directly

Use BACK TICKS instead of ' if html spans multiple lines
*/

/*
Similarly if we use styles instead of styles url

we can type css directly in array with each property in {} seperated by commas
*/


/*
  template: `<div class="alert alert-success" [hidden]="displayNotification"> 
                This website uses cookies to provide better user experience.
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,

  closeNotification(){
    this.displayNotification = true;
  }

  changing the value makes the notification visible and hidden

*/

