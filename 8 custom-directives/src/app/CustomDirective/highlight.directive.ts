import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F1948A');
    this.renderer.addClass(this.element.nativeElement, 'container');    //This adds taht class properties to that element

    //When we hover over taht component a tooltip is displayed with text  This is example div
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example div');   
  }

}
