import { Component, OnInit } from '@angular/core';
import { NewScheduleItemComponent } from './new-schedule-item/new-schedule-item.component';
import * as firebase from 'firebase';
import { PastEventsComponent } from './past-events/past-events.component';
import { ViewScheduleItemComponent } from './view-schedule-item/view-schedule-item.component';
import { HelperService } from '../services/helper.service';
import { UserService } from '../services/user.service';
import { EditScheduleItemPage } from './edit-schedule-item/edit-schedule-item.page';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(
    private helper: HelperService,
    private userService: UserService,

  ) { }

  schedule;
  nextItem;
  user;
  async getUser() {
    this.user = await this.userService.getUserData();
  }
  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.getUser();
    this.getSchedule();
  }

  newItem() {
    this.helper.openModal(NewScheduleItemComponent, null)
  }

  viewPastEvents() {
    this.helper.openModal(PastEventsComponent, null);
  }
  getSchedule() {
    firebase.firestore().collection("/users/" + this.user.coach + "/schedule")
      .orderBy("datetime")
      .onSnapshot((snapshot) => {
        let schedule = [];
        snapshot.forEach((event) => {
          let date = new Date(event.data().datetime);
          let today = new Date();
          if (date > today) {
            schedule.push(event.data());
          }

        })
        this.schedule = schedule.slice(1);
        this.nextItem = schedule.shift();
      })
  }

  viewEvent(item) {
    this.helper.openModal(ViewScheduleItemComponent, { item: item })
  }

  editEvent(event){
    this.helper.openModal(EditScheduleItemPage, {event: event})
  }
}
