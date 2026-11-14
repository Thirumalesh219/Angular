import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  apiData:any;
  constructor(private _http:HttpClient) { }
  getUsers(){
    return this._http.get("https://jsonplaceholder.typicode.com/users")
  }
  userData=signal<any>({
    id:1,
    name:"Thiru",
    userName:"Thiru_219",
    email:"thiru@gmail.com",
    subscribtion:'basic'
  });
  updateName(){
    this.userData.set({
      id:1,
      name:"Thirumalesh",
      userName:"Thiru_921",
      email:"thirumalesh@gmail.com",
      subscribtion:'basic'
    });
  }
  isEligible(){
    // return this.userData.subscribtion==="basic" && this.userData.email.endsWith("@gmail.com");
    return true;
  }
}
