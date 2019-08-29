import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { reject } from 'q';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private helper: HelperService,
  ) {
    this.getUser()
  }


  user;

  getUser() {
    firebase.auth().onAuthStateChanged(async (user) => {
      this.user = user;
    })
  }

  createUserData(data) {
    firebase.firestore().doc("users/" + this.user.uid).set(data)

  }

  getUserData() {
    if (this.user) {
      return new Promise((resolve, reject) => {
        return firebase.firestore().collection("users").doc(this.user.uid).get().then((u) => {
          return resolve(u.data())
        }).catch((e) => {
          return reject(e)
        })
      })
    }
  }

  getUserFromUid(uid) {
    return new Promise((resolve, reject) => {
      return firebase.firestore().collection("users").doc(uid).get().then((user) => {
        return resolve(user.data())
      }).catch((e) => {
        return reject(e)
      })
    })
  }

  createUser(email, password, username, ) {
    return new Promise((resolve, reject) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        return firebase.auth().currentUser.updateProfile({
          displayName: username,
          photoURL: ""
        }).then((result) => {
          return resolve();
        })
      }).catch((e) => {
        return reject(e)
      })
    })
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        return resolve();
      }).catch((e) => {
        return reject(e)
      })
    })
  }

  logoff() {
    return new Promise((resolve) => {
      this.helper.confirmationAlert("Logout", "Are you sure you want to logout?", { denyText: "Cancel", confirmText: "Logout" })
        .then((result) => {
          if (result) {
            return firebase.auth().signOut().then(() => {
              return resolve()
            })
          } else {
            return resolve()
          }
        })

    })
  }
}
export class userData {
  constructor(
    public fname?: string,
    public lname?: string,
    public uid?: string,
    public coach?:string,
    public isCoach?:boolean,
    public photoURL?: string,
    public displayName?: string,
  ) { }
}
