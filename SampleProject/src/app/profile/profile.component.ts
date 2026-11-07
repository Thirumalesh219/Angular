import { Component, inject, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userData:any;
  sharedData:SharedDataService;
  isEligible:boolean;
  constructor(){
    this.sharedData=inject(SharedDataService);
    this.userData=this.sharedData.userData;
    this.isEligible=this.sharedData.isEligible();
  }
}
