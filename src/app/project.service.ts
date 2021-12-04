import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  constructor(private http:HttpClient) { }

  saveUser(user:any[]){
   this.http.post('https://ux-products-f66bd-default-rtdb.europe-west1.firebasedatabase.app',user)
 }
}
