import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { HelperService } from 'src/app/services/helper.service';
import { ActivityService, Activity } from 'src/app/services/activity.service';
import { nextTick } from 'q';
import { FirebaseService } from 'src/app/services/firebase.service';

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
  async ngOnInit() {
    await this.getCurrentWeek();
  }



  async getCurrentDay() {
      firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentDay/").onSnapshot(async () => {
        this.currentDay = await this.activityService.getCurrentDay();
        this.getActivities();
        this.activityService.getDate(this.currentWeek.weekId, this.currentDay.dayId);

    })

  }

  async getCurrentWeek() {
      firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentWeek/").onSnapshot(async () => {
        this.currentWeek = await this.activityService.getCurrentWeek();
        this.getCurrentDay();
    })

  }

  getActivities() {
    firebase.firestore().collection("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.dayId + "/activities")
      .onSnapshot((activitySnap) => {
        let activities = [];
        activitySnap.forEach((activity) => {
          activities.push(activity.data())
        })
        this.activities = activities;
      })
  }
  newActivity() {
   if(this.currentDay == undefined || this.currentDay.dayId == 0){
    this.helper.okAlert("Select Day", "Please select a day.")
    return 
   }
    let activity = new Activity("New Activity", 0, "", "", "");
    this.firebaseService.addDocument("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.dayId + "/activities", activity)
  }
}
