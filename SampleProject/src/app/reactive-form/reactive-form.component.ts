import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;
  reactiveFormBuilder: FormGroup;
  constructor(private fb:FormBuilder){
    this.reactiveForm=new FormGroup({
      firstName: new FormControl<string>(""),
      lastName: new FormControl<string>(""),
      email: new FormControl<string>(""),
      isChecked: new FormControl<boolean>(false),
      password: new FormControl<string>(""),
      address: new FormGroup({
        city:new FormControl(""),
        street:new FormControl(""),
        pincode:new FormControl()
      })
    });
    this.reactiveFormBuilder=this.fb.group({
      firstName:this.fb.control("",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      lastName:this.fb.control("",[Validators.required]),
      email:this.fb.control("",[Validators.required,Validators.email]),
      isChecked:this.fb.control<boolean>(false),
      password:this.fb.control(""),
      address:this.fb.group({
        city:this.fb.control(""),
        street:this.fb.control(""),
        pincode:this.fb.control<number|null>(null),
      }),
      skills:this.fb.array([])
    })
  }
  get skills():FormArray{
    return this.reactiveFormBuilder.get("skills") as FormArray;
  }

  addSkill(){
    this.skills.push(this.fb.control(""));
  }

  deleteSkill(i:number){
    this.skills.removeAt(i);
  }

  onSubmit(){
    console.log("On submit");
    console.log(this.skills.value)
    console.log(this.reactiveFormBuilder.value);
  }
  setValues(){
    // this.reactiveForm.setValue({
    //   firstName:"Thiru",
    //   lastName:"Maresh",
    //   email:"thiru@gmail.com",
    //   password:"1234",
    //   isChecked:true,
    //   address:{
    //     city:"Vijayawada",
    //     street:"our street",
    //     pincode:521182
    //   }
    // });
    this.skills.clear();
    const skills = ["Angular", "React", "Node.js"];

    skills.forEach(skill => {
      this.skills.push(this.fb.control(skill));
    });
    this.reactiveFormBuilder.setValue({
      firstName:"Thiru",
      lastName:"Maresh",
      email:"thiru@gmail.com",
      password:"1234",
      isChecked:true,
      address:{
        city:"Vijayawada",
        street:"our street",
        pincode:521182
      },
      skills:skills
    });
  }
  patchValues(){
    // this.reactiveForm.patchValue({
    //   address:{
    //     city:"Vijayawada",
    //     street:"our street",
    //     pincode:521182
    //   }
    // })
    // this.reactiveForm.controls["firstName"].patchValue("Thiru");
    this.reactiveFormBuilder.patchValue({
      address:{
        city:"Vijayawada",
        street:"our street",
        pincode:521182
      }
    })
    this.reactiveFormBuilder.controls["firstName"].patchValue("Thiru");
  }
  resetValues(){
    // this.reactiveForm.reset();
    this.reactiveFormBuilder.reset();
  }
}
