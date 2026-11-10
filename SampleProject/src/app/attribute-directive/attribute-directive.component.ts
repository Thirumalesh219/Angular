import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../Services/shared-data.service';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent implements OnInit {
  isSuccess:boolean=false;
  isLoading:boolean=true;
  isError:boolean=false;
  isActive:boolean = true;
  textColor:string="black";
  username:string="";
  gender:string="";
  isAccepted:boolean=false;
  country:string="Select country";
  userData:any;
  apiData:any;
  constructor(private sharedData:SharedDataService){
    this.userData=this.sharedData.userData;
  }

  ngOnInit(): void {
    this.sharedData.getUsers().subscribe(res => this.apiData=res)
  }
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
