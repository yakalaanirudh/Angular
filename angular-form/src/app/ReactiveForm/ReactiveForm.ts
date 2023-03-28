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
            firstName:new FormControl(null,),        //This property is used in formControlName in inout tags
            lasttName:new FormControl(null,Validators.required),    //This property is required
            email:new FormControl(null,[Validators.required.Validators.email]), //Multiple validators in []
            gender:new FormControl("male"),         //To set a default value
            country:new FormControl(null),
            hobbies:new FormControl(null),
            
        })
    }

    onSubmit(){
        console.log(this,reactiveForm)
    }
}



//Add ReactiveFormsModule in importts array in module file 