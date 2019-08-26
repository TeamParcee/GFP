import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    this.getUser()
  }


  user;

  getUser(){
    firebase.auth().onAuthStateChanged((user)=>{
      this.user = user;
    })
  }
  
  createUserData(data){
     firebase.firestore().doc("users/" + this.user.uid).set(data)
   
  }

  getUserData(){
    return new Promise((resolve, reject)=>{
      return firebase.firestore().collection("users").doc(this.user.uid).get().then((user)=>{
        return resolve(user.data())
      }).catch((e)=>{
        return reject(e)
      })
    })
  }

  getUserFromUid(uid){
    return new Promise((resolve, reject)=>{
      return firebase.firestore().collection("users").doc(this.user.uid).get().then((user)=>{
        return resolve(user.data())
      }).catch((e)=>{
        return reject(e)
      })
    })
  }

  createUser(email, password, username, data){
    return new Promise((resolve, reject)=>{
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        return firebase.auth().currentUser.updateProfile({
          displayName: username,
          photoURL: ""
        }).then((result)=>{
          console.log(result);
          this.createUserData(data);
          return resolve();
      })
      }).catch((e)=>{
        return reject(e)
      })
    })
  }

  login(email, password){
    return new Promise((resolve, reject)=>{
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
       return resolve();
      }).catch((e)=>{
        return reject(e)
      })
    })
  }
  
}
