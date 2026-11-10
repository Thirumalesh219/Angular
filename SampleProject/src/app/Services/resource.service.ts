import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  API="https://fake-store-api.mock.beeceptor.com/api";
  constructor(private http:HttpClient) { }
  getAllData(){
    // return this.http.get(`${this.API}/users`);
  }
  rxResourceData = rxResource({
    loader:()=>this.http.get(`${this.API}/users`),
  })

  resourceData=resource({
    loader:()=>fetch(`${this.API}/users`).then(res => res.json())
  })

}
