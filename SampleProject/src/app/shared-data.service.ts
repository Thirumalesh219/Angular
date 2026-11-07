import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  apiData:any;
  constructor(private _http:HttpClient) { }
  getUsers(){
    return this._http.get("https://jsonplaceholder.typicode.com/users")
  }
  userData={
    id:1,
    name:"Thiru",
    userName:"Thiru_219",
    email:"thiru@gmail.com",
    subscribtion:'basic'
  }
  isEligible(){
    return this.userData.subscribtion==="basic" && this.userData.email.endsWith("@gmail.com");
  }
}
