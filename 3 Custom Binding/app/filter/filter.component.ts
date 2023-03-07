
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})  
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('total') all: number = 0;      //We renamed(alias) the variable as total so we use total in the parent component
  @Input() free: number = 0;    //@Input() means free variable receives its value from courses.ts(parent component)
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All';   //Initially All value radio button is selected

  //This is an event emitter named filterRadioButtonSelectionChanged and it emits data type string
  //We instantiate it using EventEmitter<string> = new EventEmitter<string>();
  @Output() 
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  //We raise this event using onRadioButtonSelectionChanged() method
  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    //console.log(this.selectedRadioButtonValue);
  }
}