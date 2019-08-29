import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { HelperService } from 'src/app/services/helper.service';
import { ActivityService, Activity } from 'src/app/services/activity.service';
import { nextTick } from 'q';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EditActivityPage } from './edit-activity/edit-activity.page';
import * as moment from 'moment';
import { ViewActivityPage } from './view-activity/view-activity.page';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {

  constructor(
    private userService: UserService,
    private helper: HelperService,
    private activityService: ActivityService,
    private firebaseService: FirebaseService,
  ) { }

  currentDay;
  currentWeek;
  activities;
  startTime;
  date;
  async ngOnInit() {
    await this.getCurrentWeek();
  }



  async getCurrentDay() {

    firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentDay/").onSnapshot(async () => {
      this.currentDay = await this.activityService.getCurrentDay();
      this.getActivities();
      this.activityService.getDate(this.currentWeek.weekId, this.currentDay.id);

    })

  }

  async getCurrentWeek() {
    firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentWeek/").onSnapshot(async () => {
      this.currentWeek = await this.activityService.getCurrentWeek();
      this.getCurrentDay();
    })

  }

  getActivities() {
    firebase.firestore().collection("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id + "/activities")
      .orderBy("order")
      .onSnapshot((activitySnap) => {
        let activities = [];
        let time = this.startTime;;
        let minutes = 0;
        activitySnap.forEach((activity) => {
          let a = activity.data();
          a.start = this.getTimeOfEvent(time, minutes);
          a.date = this.date;
          activities.push(a);

          time = a.time;
          minutes = a.duration;
        })
        this.activities = activities;
      })

  }
  newActivity() {
    if (this.currentDay == undefined || this.currentDay.id == 0) {
      this.helper.okAlert("Select Day", "Please select a day.")
      return
    }
    let activity = new Activity(100, "New Activity", 0, "", "", "");
    this.firebaseService.addDocument("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id + "/activities", activity);
  }

  editActivity(activity) {
    this.helper.openModal(EditActivityPage, { activity: activity, currentWeek: this.currentWeek, currentDay: this.currentDay })
  }

  viewActivity(activity) {
    this.helper.openModal(ViewActivityPage, { activity: activity })
  }

  getTimeOfEvent(time, minutes) {
    return moment(time, "hh:mm a").add('minutes', minutes).format('LT')
  }

}
