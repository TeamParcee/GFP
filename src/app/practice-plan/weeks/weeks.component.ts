import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { HelperService } from 'src/app/services/helper.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivityService } from 'src/app/services/activity.service';
import { resolve } from 'q';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.scss'],
})
export class WeeksComponent implements OnInit {

  constructor(
    private userService: UserService,
    private helper: HelperService,
    private firebaseService: FirebaseService,
    private activityService: ActivityService,
  ) { }

  weeks;
  currentWeek;
  user;
  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getUser();
    this.getWeeks();
   
  }

  async getUser() {
    return new Promise(async (resolve)=>{
      this.user = await this.userService.getUserData()
      return resolve()
    })
    
  }
  newWeek() {
    this.activityService.newWeek()
  }
  deleteWeek() {
    this.helper.confirmationAlert("Delete Last Week", "Are you sure you want to delete the Last Week? It can not be undone.", { denyText: "Cancel", confirmText: "Delete Week" })
      .then(async (result) => {
        if (result) {
          let week: any = await this.getLastWeek();
          this.activityService.deleteWeek(week.id)
        }
      })

  }
  getWeeks() {
    firebase.firestore().collection("/users/" + this.user.coach + "/weeks")
      .orderBy("week")
      .onSnapshot((weekSnap) => {
        let weeks = [];
        weekSnap.forEach((week) => {
          weeks.push(week.data())
        })
        this.weeks = weeks;
      })
  }

  getLastWeek() {
    return new Promise((resolve) => {
      return firebase.firestore().collection("/users/" + this.user.uid + "/weeks")
        .orderBy("week")
        .onSnapshot((weekSnap) => {
          let weeks = [];
          weekSnap.forEach((week) => {
            weeks.push(week.data())
          })
          let length = weeks.length;
          return resolve(weeks[(length - 1)])
        })
    })
  }

  selectWeek(weekId, week) {
    this.activityService.selectWeek(weekId, week);
    this.activityService.selectDay(0, 0)
    this.helper.closePopover();
  }
}
