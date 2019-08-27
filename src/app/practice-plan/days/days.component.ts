import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { ActivityService } from 'src/app/services/activity.service';
import { HelperService } from 'src/app/services/helper.service';

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
    private helper: HelperService,

  ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getDays();
  }

  newDay(){
    if(this.currentWeek == undefined){
      this.helper.okAlert("Select Week", "Please select a week.")
      return
    }
    this.activityService.newDay(this.currentWeek.weekId, null, null)
  }
  deleteDay() {
    this.helper.confirmationAlert("Delete Last Day", "Are you sure you want to delete the Last Day? It can not be undone.", { denyText: "Cancel", confirmText: "Delete Day" })
      .then(async (result) => {
        if (result) {
          console.log(await this.getLastDay());
          let day: any = await this.getLastDay();
          this.activityService.deleteDay(this.currentWeek.weekId, day.id)
        }
      })

  }
  getDays() {
    firebase.firestore().collection("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days")
      .orderBy("day")
      .onSnapshot((daySnap) => {
        let days = [];
        daySnap.forEach((day) => {
          days.push(day.data())
        })
        this.days = days;
      })
  }
  getLastDay() {
    return new Promise((resolve) => {
      return firebase.firestore().collection("/users/" + this.userService.user.uid + "/weeks/"  + this.currentWeek.weekId + "/days")
        .orderBy("day")
        .onSnapshot((daySnap) => {
          let days = [];
          daySnap.forEach((day) => {
            days.push(day.data())
          })
          let length = days.length;
          return resolve(days[(length - 1)])
        })
    })
  }
  selectDay(id, day){
    this.activityService.selectDay(id, day);
    this.helper.closePopover();
  }
}
