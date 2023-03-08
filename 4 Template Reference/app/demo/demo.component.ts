import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sayHello(inputEl: HTMLInputElement){
    //alert('Hello '+inputEl.value);
    console.log(inputEl)
  }
}

/*
In the .html file
<input type="text" #myVariable (keyup)="0">

so the whole input elemembt is stored with a reference named #myVariable

and whenever a key is pressed a that reference value is printed in the paragraph tag
*/
