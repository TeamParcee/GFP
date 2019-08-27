import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { WeeksComponent } from './weeks/weeks.component';
import { ActivityService } from '../services/activity.service';
import * as firebase from 'firebase';
import { UserService } from '../services/user.service';
import { DaysComponent } from './days/days.component';
import * as moment from 'moment';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-practice-plan',
  templateUrl: './practice-plan.page.html',
  styleUrls: ['./practice-plan.page.scss'],
})
export class PracticePlanPage implements OnInit {

  constructor(
    private userService: UserService,
    private activityService: ActivityService,
    private helper: HelperService,
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
  }

  currentWeek;
  currentDay;
  date;
  showCalendar = false;

  async ionViewWillEnter() {

    this.getCurrentWeek();
    this.getCurrentDay();
  }


  viewWeeks() {
    this.helper.presentPopover(event, WeeksComponent, { currentWeek: this.currentWeek })
  }

  viewDays() {
    this.helper.presentPopover(event, DaysComponent, { currentWeek: this.currentWeek, currentDay: this.currentDay })
  }

  getCurrentWeek() {
    firebase.firestore().doc("/users/" + this.userService.user.coach + "/utility/currentWeek/").onSnapshot(async () => {
      this.currentWeek = await this.activityService.getCurrentWeek();
    })
  }

  getCurrentDay() {
    firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentDay/").onSnapshot(async () => {
      this.currentDay = await this.activityService.getCurrentDay();
      this.date = await this.activityService.getDate(this.currentWeek.weekId, this.currentDay.dayId);
    })
  }

  async dateSelected(event) {

    let date = moment(event.toString()).format('ll');
    this.firebaseService.updateDocument("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.dayId, { date: date })
    this.showCalendar = false;
    this.date = await this.activityService.getDate(this.currentWeek.weekId, this.currentDay.dayId);
  }

  checkDay() {
    if (this.currentDay.dayId == 0) {
      this.helper.okAlert("Select Day", "Please select a day.")
      return;
    }
    this.showCalendar = !this.showCalendar
  }

}
