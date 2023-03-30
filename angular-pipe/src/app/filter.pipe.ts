import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";

@Pipe({
    name: 'filterStudent',
    pure: false
})
//When creating a pipe the TypeScript file should implement PipeTransform interface.
export class FilterPipe implements PipeTransform{
 transform(students: Student[], filterText: string) {
     console.log('Filter pipe called!');
     if(students.length === 0 || filterText === ''){
         return students;
     } else {
         return students.filter((student) => 
         { 
             return student.gender.toLowerCase() === filterText.toLowerCase()
         })
     }
 }
}

//By default every pipe is a pure pipe