import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { FirebaseService } from './firebase.service';
import { NavController } from '@ionic/angular';
import { UserService } from './user.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private helper: HelperService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private userService: UserService,
  ) { }


  weekCount;

  getWeekCount() {
    firebase.firestore().collection("/users/" + this.userService.user + "/weeks/").onSnapshot((weekSnap) => {
      this.weekCount = (weekSnap.size) ? weekSnap.size : 0;
    })
  }
  getDayCount(weekId): any {
    return new Promise((resolve) => {
      return firebase.firestore().collection("/users/" + this.userService.user + "/weeks/" + weekId + "/days").onSnapshot((daySnap) => {
        return resolve((daySnap.size) ? daySnap.size : 0)
      })
    })

  }
  newWeek() {
    this.firebaseService.addDocument("/users/" + this.userService.user + "/weeks/" + (this.weekCount + 1), { week: (this.weekCount + 1) })
  }

  async newDay(weekId, start, date) {
    this.firebaseService.addDocument("/users/" + this.userService.user + "/weeks/" + weekId + "/days", { day: (await this.getDayCount(weekId) + 1), start: start, date: date })
  }

  getWeekId(week) {
    return new Promise((resolve) => {
      return firebase.firestore().collection("/users/" + this.userService.user + "/weeks/")
        .where("week", "==", week)
        .get().then((weekSnap) => {
          let weeks = [];
          weekSnap.forEach((w) => {
            weeks.push(w.data())
          })
          return resolve(weeks[0])
        })
    })
  }

  getDayId(weekId, day) {
    return new Promise((resolve) => {
      return firebase.firestore().collection("/users/" + this.userService.user + "/weeks/" + weekId + "/days")
        .where("day", "==", day)
        .get().then((daySnap) => {
          let days = [];
          daySnap.forEach((d) => {
            days.push(d.data())
          })
          return resolve(days[0])
        })
    })
  }
  deleteWeek(weekId) {
    return new Promise((resolve, reject) => {
      this.firebaseService.deleteDocument("/users/" + this.userService.user + "/weeks/" + weekId).then(() => {
        return resolve()
      }).catch((e) => {
        return reject(e)
      })
    })

  }
}
