//valuechangs is raised whenever there is a value entry or change in the form
//Status changes is raised whenever there is a change is status or it used to know current status of the form
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
    formStatus:

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

    //console logged for value change in firstname
    this.reactiveForm.get('personalDetails.firstName').valueChanges.subscribe((value)=>{
        console.log(value);
    })

    //console log for any change in the input tags of the form
    this.reactiveForm.valueChanges.subscribe((value)=>{
        console.log(value);
    })

    //console log the present status for the form
    //The values will be invalid pending valid
    //We can use this values in ngClass to change border of form by assign the value to a property
    this.reactiveForm.statusChanges.subscribe((value)=>{
        //console.log(value);
        this.formStatus=value
    })
    /*
    <div class="form my-form" [ngClass]="formStatus"><div>
    */
}

