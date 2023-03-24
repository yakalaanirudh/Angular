import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
  //providers: [UserService]
})
export class AdduserComponent implements OnInit {
  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  AddUser(){
    this.userService.AddNewUser(this.username, this.status);
    //console.log(this.userService.users);
  }

}


/*
In the above code we comment out
  //providers: [UserService]

  because

Add user is a child component of the app component.

so from add user when we add a new user the state of the users object 
is updated in the instance of the users object that is created in the add user component.

but in the app component we have created a separate instance of the users object.

since the add user component is a child of the app component the incidence of the users object 
created in the app component is overwritten in the add user component through hierarchy.

so when we add a new user into our app and updated the new user is not visible on the screen 
because we are dealing with two separate instances of the same object and the old object is being overridden in the child component.

so we comment the providers in the add user component so that the entire app deals with the same instance of the users object.


*/