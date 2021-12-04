import { Injectable } from '@angular/core';
import {AngularFirestore}from 'angularfire2/firestore'
import { rejects } from 'assert';
import {User} from './user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore:AngularFirestore) { }

  getUserDoc(id:any){
    return this.angularFirestore
    .collection('student-collection')
    .doc(id)
    .valueChanges()
  }

  getUserList(){ 
    return this.angularFirestore.collection("student-collection").snapshotChanges();

  }
  createStudent(user:User)
  { 
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore.collection("student-collection")
      .add(user)
      .then(response=>{console.log(response)},error=>reject(error))
    })
  }
}
