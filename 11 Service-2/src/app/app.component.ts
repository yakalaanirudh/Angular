import { Component, OnInit } from '@angular/core';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]          //to provide the instance in the constructor
})
export class AppComponent implements OnInit{
  title = 'UserService';

  constructor(private userService: UserService){    //An instance of the userService

  }

  users: {name: string, status: string}[] = []; //users is an object with properties name and status and it is an array of such objects

  ngOnInit(){
    this.users = this.userService.users;    //We popilate the above users object with the instance of userService property users
  }
}

