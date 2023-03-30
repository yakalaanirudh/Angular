import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentage',
})
export class PercentagePipe implements PipeTransform{
    transform(value: number, totalMarks: number, decimal: number) {
        console.log('percentage pipe called!');
        return (value / totalMarks * 100).toFixed(decimal); 
    }
}

//Pipes are used to transform data
//There many default pipes in angular like percent, uppercase,lowercase,async
//If we are using two pipes the order in which the two pipes are mentioned is important for effective execution
//value is the value to transform
//We pass total marks as a parameter
//We pass the number argument to fix the total number of digits after decimal point