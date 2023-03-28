/*
When we add a validation to a input field 
In the console the controld for that property if there is no error will be empty
But is there is an error an array which has all the validation error is console.logged

required field and it is empty then {required:true}
*/

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
                lasttName:new FormControl(null,[Validators.required,this.noSpaceAllowed]),    
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

    noSpaceAllowed(control:FormControl){
        if(control.value!=null &&FormControl.value.indexOf(' ')!=-1){
            return {noSpaceAllowed:true}
        }
        return null;
    }
}

/*
WE can use this custom validation in ngIf directive

<div>
<span *ngIf="reactiveForm.get('personalDetails.firstName').errors?.['required']">First Name Required</span>
<span *ngIf="reactiveForm.get('personalDetails.firstName').errors?.['noSpaceAllowed']">No spaces allowed</span>
</div>
*/

//The way to enter validators in angular is {default value, [built-in validators(sync validators)],[async validators]}