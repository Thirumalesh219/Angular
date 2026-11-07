import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  userData:User={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    isChecked:false
  }
  onSubmit(userForm:NgForm){
    console.log(userForm.value,"On submit")
  }
  
  setValues(userForm:NgForm){
    let obj={
      firstName:"Raj",
      lastName:"Ram",
      email:"raj@gmail.com",
      password:"1234",
      isChecked:false
    }
    userForm.setValue(obj);
  }
  patchValues(userForm:NgForm){
    let obj={
      firstName:"Raj",
      lastName:"Ram",
      email:"raj@gmail.com",
    }
    userForm.control.patchValue(obj);
  }
  resetValues(userForm:NgForm){
    userForm.reset();
    // userForm.resetForm();
  }
}
