import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  private datePipe = new DatePipe('en-US');
  transform(value: any, ...args: unknown[]): unknown {
    // if(value===null || value===undefined || value==="")
    //   return 'NA'
    // return '+91 '+value;
    return this.datePipe.transform(value,"MMM/YYYY");
  }

}
