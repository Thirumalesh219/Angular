import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-view',
  imports: [CommonModule],
  templateUrl: './crud-view.component.html',
  styleUrl: './crud-view.component.scss'
})
export class CrudViewComponent implements OnInit {
  UserData:any;
  constructor(private CrudService:CrudService,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    console.log("Active route",this.activeRoute);
    console.log("Active route snapshots",this.activeRoute.snapshot);
    console.log("Active route params",this.activeRoute.params);
    console.log("Active route parameters map",this.activeRoute.paramMap);
    console.log("Active route query parameters",this.activeRoute.queryParams);
    console.log("Active route query parameters map",this.activeRoute.queryParamMap);
    const userId=this.activeRoute.snapshot.params["id"];
    this.getUserData(userId);
  }
  getUserData(userId:number){
    this.CrudService.getUser(userId).subscribe(res => this.UserData=res);
  }
}
