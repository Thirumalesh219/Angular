import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ParentCtoPComponent } from '../parent-cto-p/parent-cto-p.component';
import { Sib1Component } from '../sib1/sib1.component';
import { Sib2Component } from '../sib2/sib2.component';
import { ReuseComponent } from '../../reuse/reuse.component';

@Component({
  selector: 'app-main',
  imports: [ParentCtoPComponent,Sib1Component,Sib2Component,ReuseComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {
  sib1Text:string="";
  sib2Text:string="";

  @ViewChild('reusable')
  reusableComponent!:ReuseComponent;

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.reusableComponent.welcome="Welcome message form main"
    },3000);
  }

  constructor(){
    setTimeout(()=>{
      this.sib1Text="Sib1 text";
      this.sib2Text="Sib2 text";
    },3000);
  }
  setSib2Value(sib2:string){
    this.sib2Text=sib2;
    console.log(sib2);
  }
  setSib1Value(sib1:string){
    this.sib1Text=sib1;
    console.log(sib1);
  }
}
