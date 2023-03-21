import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  //we use set to make a property(directive) to behave like a function
  @Input() set appHighlight(condition: boolean){
    if(condition){
      this.renderer.addClass(this.element.nativeElement, 'highlight');
      //Where condition is true add the class named highlight to that component
    }
  }

}
