import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  //1. What to add or Remove private template: TemplateRef<any>
  //2. From where to add or remove  private template: TemplateRef<any>
  //1 is added within 2
  constructor(private template: TemplateRef<any>, private viewContainer: TemplateRef<any>) {

  }

  @Input() set appIf(condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template)  //In the outer div craete the inner div()
    } else {
      this.viewContainer.clear();   //If not true dont create it
    }
  }
}
//we add * before a structural directive
