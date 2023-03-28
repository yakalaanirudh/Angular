//We use aync validator when we want to check the data from the server is valid or not

import {component,OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {Observable} from 'rxjs';

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
                email:new FormControl(null,[Validators.required.Validators.email],this.emailNotAllowed),
            })

            gender:new FormControl("male"),         
            country:new FormControl(null),
            hobbies:new FormControl(null),
            
        })
    }

    onSubmit(){
        console.log(this,reactiveForm)
    }

    //A validator is nothing but a method
    //An async validator returns a promise or observable

    //When we enter any email in console we can see a class property ng-invalid changes from {ng-invalid} to {ng-pending}
    //If email ok {ng-pending} to {ng-vaild}
    //If email not ok {ng-pending} to {ng-invalid}
    emailNotAllowed(control:FormControl):Promise<any>|Observable<any>{  //emailNotAllowed is the Promise or observable
        const response=new Promise((resolve,reject)=>{                  //Inside it we are creating a variable named response which is a promise
            setTimeout(()=>{    
                if(control.value==="anirudhyakala@gmail.com"){
                    resolve({emailNotAllowed:true})                //If email matches it resolves by setting this emailNotAllowed property to true
                    //emailNotAllowed:true is the error code
                }else{
                    resolve(null)                                       //Email doesnt match it returns null
                }
            },5000) 
        });

        return response;                //Return the reponse
    }
}
