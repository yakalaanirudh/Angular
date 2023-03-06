import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue: string = '';

  changeSearchValue(eventData: Event){
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}

/*
Intial value an empty string is stored in the variable searchValue

By using the function changeSearchValue assign the typed value to searchValue

<HTMLInputElement>eventData.target).value is the value that is typed
*/

/*

For two way data binding we use [(ngModel)] and we need to import form modules and add it to app.module
*/
/*
We use [(ngModel)]="searchValue" for two way data binding "searchValue being the variable to change"
*/