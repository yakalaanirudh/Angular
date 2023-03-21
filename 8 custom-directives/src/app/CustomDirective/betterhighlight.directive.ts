import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @Input() defaultColor: string = 'transparent';    //@Input to get the value from property of the html componenet
  @Input('appBetterhighlight') highlightColor: string = 'pink';   //We are using an alias so in html also we use alias
  @Input() title: string = 'This is title';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;   //Default set to defaultColor property which is transparent
  @HostBinding('style.border') border: string = 'none';     //Default Border set to none 

  //When we reload a page the initial background is transparent so it will be transparent
  //But from hostbinding we set initial to yellow
  //So even if we refresh if we want the peoperty to be yellow we initialize the property in ngOnInit hook
  ngOnInit(){
    this.background = this.defaultColor;  
  }

  @HostListener('mouseenter') mouseenter(){   //When mouse enters over this element these events happen
    this.background = this.highlightColor; 
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave(){   //When mouse leaves the element these events happen
    this.background = this.defaultColor;
    this.border = 'none'
  }

}

/*
the eblow is how we bind properties from the componenet element in html file

<div class="container" appBetterHighlight [highlightcolor]="'red'" [defaultColor]="'yellow'">    
  <p>This is a demo HTML content to understand @HostBinding in Angular.</p>
</div>

If the component class has a property value and we pass another property from host binsing the property to be dispalyed depend
*/
