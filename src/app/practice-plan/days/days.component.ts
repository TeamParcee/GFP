import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
})
export class DaysComponent implements OnInit {

  days;
  currentWeek;
  currentDay;
  constructor(
    private userService: UserService,
    private activityService: ActivityService,

  ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getDays();
  }

  newDay(){
    this.activityService.newDay(this.currentWeek.weekId, null, null)
  }
  getDays() {
    firebase.firestore().collection("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days")
      .orderBy("days")
      .onSnapshot((daySnap) => {
        let days = [];
        daySnap.forEach((day) => {
          days.push(day.data())
        })
        this.days = days;
      })
  }

}
