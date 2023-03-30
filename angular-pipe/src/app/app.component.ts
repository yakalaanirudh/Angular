import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{
  title = 'AngularPipes';
  students: Student[];
  totalMarks: number;
  _filterText:string = '';    //This property is two way binded to filterText in html file
  filteredStudents: Student[];
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length);
    }, 2000); 
  });


  //With the use of get and set methods we can implement pure pipes even though there is no change to reference value
  //We use the get and set methods to set the typed value and get the typed value in the input element
  //Return the value assigned to _filtertext property
  get filterText(){
    return this._filterText;
  }

  //This(set) filterText property is called everytime there is a change in the input element
  //The inputed text is then assigned to _filterText property
  //Then the students are filtered and assigned to array
  set filterText(value: string){
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(value);
  }

  constructor(private studentService: StudentService){    //An instance of StudentService is created

  }

  ngOnInit(){
    this.students = this.studentService.students; //When initially loaded teh student array is populated with all students
    this.totalMarks = this.studentService.totalMarks; //When initially loaded totalMarks is set to student SErvice total marks
    this.filteredStudents = this.students;      //When filtered filteredStudents array is filled with the filtered elements
  }

  AddDummyStudent(){
    // let studentCopy = Object.assign([], this.students) //Creating a pure copy
    // studentCopy.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});   //Pushing new student
    // this.students = studentCopy;     //Reassigning the array
    this.students.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
    this.filteredStudents = this.filterStudentByGender(this._filterText);
    //Push a student to students array
    //Again execute filterstudentBy gender function to get exact results with new element included
  }

  ChangeGender(){
    // let studentCopy = Object.assign([], this.students) //Creating a pure copy
    // studentCopy[0].gender = 'Female';    //Changing value of gender
    // this.students = studentCopy;   //Reassigning the array
    this.students[0].gender = 'Female';
    this.filteredStudents = this.filterStudentByGender(this._filterText);
    //Change gender of first element
    //Again execute filterstudentBy gender function to get exact results with new element included
  }

  onMouseMove(){}

  filterStudentByGender(filterTerm: string){
    if(this.students.length === 0 || this.filterText === ''){
      return this.students;   //Return all students if filterm term is an empty string
  } else {

    //else return student in students array in which the filterm is equal to gender property
      return this.students.filter((student) => 
      { 
          return student.gender.toLowerCase() === filterTerm.toLowerCase();
      })
  }
  }
}

/*
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length);
    }, 2000);
  });


  The above promise gives us the total numbe rof students after 2 seconds
*/
