import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SharedDataService } from '../Services/shared-data.service';
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
    console.log(this.sharedData.userData());
    this.userData = computed(() => this.sharedData.userData());
    this.isEligible=this.sharedData.isEligible();
  }
  updateUser(){
    this.sharedData.updateName();
  }
}
