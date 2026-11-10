import { Component, effect, OnInit } from '@angular/core';
import { ResourceService } from '../Services/resource.service';
import { ReuseComponent } from '../reuse/reuse.component';

@Component({
  selector: 'app-recourse-api',
  imports: [ReuseComponent],
  templateUrl: './recourse-api.component.html',
  styleUrl: './recourse-api.component.scss'
})
export class RecourseApiComponent implements OnInit {
  UserData:any;
  constructor(private resourceService:ResourceService){
    // effect(()=>{
    //   this.UserData=this.resourceService.rxResourceData;
    //   console.log(this.UserData)
    //   console.log(this.UserData.value(),this.UserData.isLoading(),this.UserData.status());
    // });
  }
  welcomeString="Hey you are on Resource API component"

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    // const userData = this.resourceService.rxResourceData;
    const userData = this.resourceService.resourceData;
    this.UserData=userData;

    console.log("Resource:", userData);
    console.log("Value:", userData.value());
    console.log("Status:", userData.status());
    console.log("Loading:", userData.isLoading());
  }
}
