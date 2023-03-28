//Adding validation from grouping

import {component,OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@component({
    selector:'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent{
    title='ReactiveForm';
    reactiveForm:FormGroup          //reactiveForm Property is of type FormGroup    This property is used in HTml files form tag


    ngOnInit(){
        this.reactiveForm=new FormGroup({
            personalDetails:new FormGroup({
                firstName:new FormControl(null,),        
                lasttName:new FormControl(null,Validators.required),    
                email:new FormControl(null,[Validators.required.Validators.email]),
            })

            gender:new FormControl("male"),         
            country:new FormControl(null),
            hobbies:new FormControl(null),
            
        })
    }

    onSubmit(){
        console.log(this,reactiveForm)
    }
}

