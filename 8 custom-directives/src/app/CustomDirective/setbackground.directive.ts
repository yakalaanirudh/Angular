import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackgroundDirective implements OnInit{

    constructor(private element: ElementRef){       //On which element we pass this directive that element is passed into this constructor
        //element.nativeElement.style.backgroundColor = '#C8E6C9';
        this.element = element;                 //Set the element property value to the html element 
    }

    //Writing the logic in constructor is not preferred so we write it in ngOnInit as the directive is called after ngOnInit is completely initialized
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = '#C8E6C9';
    }
}

/*
@Directive({                            //@Directive because we are creating a custom directive
    selector: '[setBackground]'         //'[setBackground]' is the name we can use as an HTML attribute so wrap in []
})

this.element = element; 
We assign the element again in constructor becuase only the constructor receives the html element 
so to make it available to the entire class we pass on to a property named element
*/
