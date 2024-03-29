import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }
  @Input() set appStyle(styles: Object){
    let entries = Object.entries(styles);   
    //console.log(entries); //We get an array all properties and its values [[backgroundcolor,white],[font,Ariel]]

    for(let entry of entries){
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
      //this.renderer.setStyle(this.element.nativeElement, property, property's value);
    }
  }
}
