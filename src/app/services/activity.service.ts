import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { FirebaseService } from './firebase.service';
import { NavController } from '@ionic/angular';
import { UserService } from './user.service';
import * as firebase from 'firebase';
import { Observable, observable, of, from, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private helper: HelperService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private userService: UserService,
  ) {
    this.getWeekCount();
   
  }


  weekCount;
  startTime = new Subject();
  startTimeOb;
  currentDay;
  currentWeek;
  activities;
  nextActivity;
  user;

  async getUser(){
  }
  getWeekCount() {
    firebase.firestore().collection("/users/" + this.userService.user.uid + "/weeks/").onSnapshot((weekSnap) => {
      this.weekCount = (weekSnap.size) ? weekSnap.size : 0;
    })
  }
  getDayCount(weekId): any {
    return new Promise((resolve) => {
      return firebase.firestore().collection("/users/" + this.userService.user.uid + "/weeks/" + weekId + "/days").onSnapshot((daySnap) => {
        return resolve((daySnap.size) ? daySnap.size : 0)
      })
    })

  }
  newWeek() {
    this.firebaseService.addDocument("/users/" + this.userService.user.uid + "/weeks", { week: (this.weekCount + 1) })
  }

  async newDay(weekId, start, date) {
    this.firebaseService.addDocument("/users/" + this.userService.user.uid + "/weeks/" + weekId + "/days", { day: (await this.getDayCount(weekId) + 1), start: start, date: date })
  }

 async getWeekId(week) {
    return new Promise(async(resolve) => {
      let user:any = await this.userService.getUserData();
      return firebase.firestore().collection("/users/" + user.coach + "/weeks/")
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
    return new Promise(async (resolve) => {
      let user:any = await this.userService.getUserData();
      return firebase.firestore().collection("/users/" + user.coch + "/weeks/" + weekId + "/days")
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
      this.firebaseService.deleteDocument("/users/" + this.userService.user.uid + "/weeks/" + weekId).then(() => {
        return resolve()
      }).catch((e) => {
        return reject(e)
      })
    })
  }

  deleteDay(weekId, dayId) {
    return new Promise((resolve, reject) => {
      this.firebaseService.deleteDocument("/users/" + this.userService.user.uid + "/weeks/" + weekId + "/days/" + dayId).then(() => {
        return resolve()
      }).catch((e) => {
        return reject(e)
      })
    })
  }

  newActivity(weekId, dayId, activity) {
    return new Promise((resolve) => {
      this.firebaseService.addDocument("/users/" + this.userService.user.uid + "/weeks/" + weekId + "/days/" + dayId + "/activities", activity).then(() => {
        return resolve()
      })
    })
  }
  deleteActivity(weekId, dayId, activity) {
    return new Promise((resolve, reject) => {
      this.firebaseService.deleteDocument("/users/" + this.userService.user.uid + "/weeks/" + weekId + "/days/" + dayId + "/activiities/" + activity.id).then(() => {
        return resolve()
      }).catch((e) => {
        return reject(e)
      })
    })
  }
  editActivity(weekId, dayId, activity) {
    return new Promise((resolve, reject) => {
      this.firebaseService.updateDocument("/users/" + this.userService.user.uid + "/weeks/" + weekId + "/days/" + dayId + "/activities/" + activity.id, activity)
        .then(() => {
          return resolve();
        }).catch((e) => {
          return reject(e)
        })
    })
  }

  selectWeek(weekId, week) {
    this.firebaseService.setDocument("/users/" + this.userService.user.uid + "/utility/currentWeek/", { weekId: weekId, week: week })
  }

  selectDay(dayId, day) {
    this.firebaseService.setDocument("/users/" + this.userService.user.uid + "/utility/currentDay/", { dayId: dayId, day: day })
  }

  getCurrentWeek() {
    return new Promise((resolve) => {
      return resolve(this.firebaseService.getDocument("/users/" + this.userService.user.uid + "/utility/currentWeek/"))
    })
  }
  getCurrentDay() {
    return new Promise(async(resolve) => {
      let user:any = await this.userService.getUserData();
      let day:any = await this.firebaseService.getDocument("/users/" + this.userService.user.uid + "/utility/currentDay/");
      let week:any = await this.firebaseService.getDocument("/users/" + this.userService.user.uid + "/utility/currentWeek/");
      return resolve(this.firebaseService.getDocument("/users/" + user.coach + "/weeks/" + week.weekId + "/days/" + day.dayId))
    })
  }

  getDate(weekId, dayId) {
    return new Promise(async (resolve) => {
      let user:any = await this.userService.getUserData();
      return firebase.firestore().doc("/users/" + user.coach + "/weeks/" + weekId + "/days/" + dayId).onSnapshot((snapshot) => {
        if (snapshot.exists) {
          let date = snapshot.data();
          return resolve(date)
        } 
      })
    })
  }

 
}

export class Activity {
  constructor(
    public order?: number,
    public name?: string,
    public duration?: number,
    public start?: string,
    public date?: string,
    public notes?: string
  ) { }
}
