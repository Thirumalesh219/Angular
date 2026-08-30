import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {
  isSuccess:boolean=false;
  isLoading:boolean=true;
  isError:boolean=false;
  isActive:boolean = true;
  textColor:string="black";
  username:string="";
  gender:string="";
  isAccepted:boolean=false;
  country:string="Select country";

  toggleisSuccess(){
    this.isSuccess=true;
    this.isLoading=false;
    this.isError=false;
    this.textColor="green";
  }
  toggleisLoading(){
    this.isLoading=true;
    this.isError=false;
    this.isSuccess=false;
    this.textColor="black";
  }
  toggleisError(){
    this.isError=true;
    this.isLoading=false;
    this.isSuccess=false;
    this.textColor="red";
  }

}
