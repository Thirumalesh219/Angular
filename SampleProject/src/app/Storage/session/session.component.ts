import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-session',
  imports: [],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss'
})
export class SessionComponent {
  sessionValue:string="";
  localValue:string="";
  cookieValue:string="";
  constructor(private cookie:CookieService){}
  setSession(){
    sessionStorage.setItem("user","Thirumalesh");
    sessionStorage.setItem("pass","1234");
  }
  getSession(){
    this.sessionValue=sessionStorage.getItem("user") || "No data";
  }
  removeSession(){
    sessionStorage.removeItem("user");
    this.sessionValue=sessionStorage.getItem("user")||sessionStorage.getItem("pass")||"";
  }
  clearSession(){
    sessionStorage.clear();
  }
  setlocal(){
    localStorage.setItem("user","Thirumalesh");
    localStorage.setItem("pass","1234");
  }
  getlocal(){
    this.localValue=localStorage.getItem("user") || "No data";
  }
  removelocal(){
    localStorage.removeItem("user");
    this.localValue=localStorage.getItem("user")||localStorage.getItem("pass")||"";
  }
  clearlocal(){
    localStorage.clear();
  }
  setCookie(){
    this.cookie.set("cookieUser","Thiru");
    this.cookie.set("cookieUser2","Praveen");
  }
  getCookie(){
    console.log(this.cookie.getAll());
    this.cookieValue=this.cookie.get("cookieUser");
  }
  deleteCookie(){
    this.cookie.delete("cookieUser");
    this.cookieValue=this.cookieValue=this.cookie.get("cookieUser")||this.cookie.get("cookieUser2")||"";
  }
  deleteAllCookie(){
    this.cookie.deleteAll();
  }
}
