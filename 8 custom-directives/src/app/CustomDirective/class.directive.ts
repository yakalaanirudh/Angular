import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  @Input() set appClass(value: Object){   //Value is the {container: 10 > 5, 'change-font': true}
    let entries = Object.entries(value)   //We get all key value pairs in the value object
    //The (key,value) paisr are (className,condition when that class to be applied)
    for(let [className, condition] of entries){
      if(condition){
        this.renderer.addClass(this.element.nativeElement, className);  
        //Apply this property(class) to that element if the consition is satisfied
      }
    }
  }
}


/*
  @Input() set display(value: Object){   //Value is the {container: 10 > 5, 'change-font': true}
    let entries = Object.entries(value)   //We get all key value pairs in the value object
    //The (key,value) paisr are (className,condition when that class to be applied)
    for(let [className, condition] of entries){
      if(condition){
        this.renderer.addClass(this.element.nativeElement, className);  
        //Apply this property(class) to that element if the consition is satisfied
      }
    }
  }
*/