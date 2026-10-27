import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnDestroy, OnInit, OnChanges,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  ngOnDestroy(): void {
    console.log("On destory in User component");
  }
  constructor(private rtr:Router){
    console.log("Constructor")
  }
  ngOnInit(): void {
    console.log("On init");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes")
  }
  ngDoCheck(): void {
    console.log("Ng Do check");
  }
  ngAfterContentInit(): void {
    console.log("After Content initialization");
  }
  ngAfterContentChecked(): void {
    console.log("After Content got checked")
  }
  ngAfterViewInit(): void {
    console.log("Ng after view Init");
  }
  ngAfterViewChecked(): void {
    console.log("After view checked");
  }
  // userName:string="";
  // password:string="";
  // errorMessage:string="";
  submit(){
  //   if(this.userName==="thiru" && this.password==="1234"){
  //     this.errorMessage="";
      this.rtr.navigate(["detector"]);
  //     // this.rtr.navigateByUrl("detector");
  //   }
  //   else{
  //     this.errorMessage="Invalid Credentials";
  //   }
  }
}
