import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';

  firstname:string;
  lastname:string; 
  email: string;
  gen:string;
  country: string;

  defaultGender = 'Female';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  
  @ViewChild('myForm') form: NgForm;    //viewChild named 'myForm' which is type ngForm

  //When the form is submitted we want to read the values from the form and assign it to the properties below
  //These properties are displayed at the bottom of the html file

  onSubmit(){
    console.log(this.form);       //We are console logging the above form

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.reset();      //To rest the values to default value after the form is submitted
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'smith';
    // this.form.value.personDetails.email = 'abc@example.com';


    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    this.form.form.patchValue({
      personDetails: {
         firstname: 'John',
         lastname: 'Smith',
         email: 'abc@example.com'
      }
    })
  }
}


/*
There are properties in the console.logged object
valid
invalid
dirty
*/

//SetDefaultValue function submits but the values are not diaplyed in the DOM.
//So we use Setvalue or patch value to display and submit

//SetValue submits with no value in fields that are not specified inside the setValue functiom

//PatchValue submits with the default value for that property if it is not specified inside the patchValue function