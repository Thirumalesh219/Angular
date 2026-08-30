import { Component } from '@angular/core';
import { employee } from '../types';

@Component({
  selector: 'app-structural-directive',
  imports: [],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {
  showSubmit:boolean = false;
  s1:string=""
  s2:string=""
  employees:employee[]=[
    {empName:"Thiru",empNumber:118,empDept:"CMS",empEmail:"thiru@gmail.com"},
    {empName:"Praveen",empNumber:117,empDept:"CSB",empEmail:"praveen@gmail.com"},
    {empName:"Raj",empNumber:119,empDept:"CSD",empEmail:"raj@gmail.com"},
    {empName:"Ram",empNumber:120,empDept:"CSE",empEmail:"ram@gmail.com"},
    {empName:"Rvr",empNumber:127,empDept:"IT",empEmail:"rvr@gmail.com"}
  ]
  toggleButton(){
    this.showSubmit = !this.showSubmit;
  }

  setS1(e:Event){
    this.s1=(e.target as HTMLInputElement).value;
  }

  setS2(e:Event){
    this.s2=(e.target as HTMLInputElement).value;
  }
}
