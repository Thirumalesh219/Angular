import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
  angularPipes:string="Sample Angular pipes"
  personData = {
    name:"Raj",
    age:20,
    sex:"Male"
  }
  dateObject:Date = new Date();
  decimalValue=3.141542;
  percentValue=0.3;
  currencyValue=1000;
}
