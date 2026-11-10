import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Services/crud.service';
import { IUser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReuseComponent } from '../reuse/reuse.component';

@Component({
  selector: 'app-crud',
  imports: [CommonModule,ReactiveFormsModule,ReuseComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit {
  UserData:IUser[]=[];
  addingNewUser:boolean=false;
  editingUser:boolean=false;
  addUserForm:FormGroup;
  editUserForm:FormGroup;
  welcomeString="Hey you are on CRUD component"
  
  constructor(private CrudService:CrudService,private router:Router,private fb:FormBuilder){
    this.addUserForm=this.fb.group({
      id:this.fb.control<number>(0),
      name:this.fb.control<string>(""),
      username:this.fb.control<string>(""),
      email:this.fb.control<string>("",[])
    });
    this.editUserForm=this.fb.group({
      id:this.fb.control<number>(0),
      name:this.fb.control<string>(""),
      username:this.fb.control<string>(""),
      email:this.fb.control<string>("",[])
    })
  }

  ngOnInit(): void {
    this.getData();
  }
  
  resetForm(){
    this.addingNewUser=false;
    this.editingUser=false;
    this.addUserForm.reset();
    this.editUserForm.reset();
  }

  getData(){
    this.CrudService.getUsers().subscribe(res => this.UserData=res);
  }
  addNewUser(){
    this.addingNewUser=true;
    this.editingUser=false;
  }
  createUser(){
    this.addUserForm.patchValue({id:this.UserData.length+1});
    this.CrudService.addUser(this.addUserForm.value).subscribe(res =>{
      this.resetForm();    
      this.getData();
    });
  }
  editUser(userId:number){
    this.addingNewUser=false;
    this.editingUser=true;
    const selectedUser=this.UserData.find(u=>u.id===userId);
    if(selectedUser)
      this.editUserForm.setValue(selectedUser);
  }
  modifyUser(){
    this.CrudService.editUser(this.editUserForm.value).subscribe(res => {
      this.resetForm();
      this.getData();
    });
  }
  deleteUser(userId:number){
    this.CrudService.deleteUser(userId).subscribe(res => {
      this.getData();
    });
  }
  viewUser(userId:number){
    this.router.navigate(["crudview",`${userId}`])
  }
}
