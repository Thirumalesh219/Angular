import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustomPipePipe,PurePipe,ImpurePipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
  mobileNumber=9908924173
  pureValue = 5
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
