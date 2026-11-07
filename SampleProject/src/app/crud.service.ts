import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API_URL="http://localhost:3000";
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<IUser[]>(`${this.API_URL}/users`);
  }
  addUser(user:IUser){
    return this.http.post(`${this.API_URL}/users`,user);
  }
  editUser(user:IUser){
    return this.http.patch(`${this.API_URL}/users/${user.id}`,user);
  }
  deleteUser(id:number){
    return this.http.delete(`${this.API_URL}/users/${id}`)
  }
}
