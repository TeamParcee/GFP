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
  orderArray;
  user;


  async getUser(){
    this.user = await this.userService.getUserData();
  }
  async ionViewWillEnter(){
    
  }
  async ngOnInit() {
    await this.getUser()
    await this.getCurrentWeek();
      firebase.firestore().collection("/users/" + this.userService.user.uid + "/utility/").onSnapshot(()=>{
        this.getActivities();
      })
   
  }



  async getCurrentDay() {
    return new Promise((resolve)=>{
      console.log("here 2");
      return firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentDay/").onSnapshot(async () => {
        this.currentDay = await this.activityService.getCurrentDay();
        this.getActivities();
        if(this.currentDay){
          this.activityService.getDate(this.currentWeek.weekId, this.currentDay.id);
        }
       
        return resolve()
      })
    })
   

  }

  async getCurrentWeek() {
    return new Promise((resolve)=>{
      return firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentWeek/").onSnapshot(async () => {
        this.currentWeek = await this.activityService.getCurrentWeek();
        this.getCurrentDay().then(()=>{
          return resolve();
        })
        
      })
    })
   

  }

  getActivities() {
      firebase.firestore().collection("/users/" + this.user.coach + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id + "/activities")
      .orderBy("order")
      .onSnapshot((activitySnap) => {
        let activities = [];
        this.orderArray = [];
        let time = moment(this.currentDay.start).format("LT");
        let minutes = 0;
        let count = 0;
        activitySnap.forEach((activity) => {
          count = count + 1;
          let a = activity.data();
          a.start = this.getTimeOfEvent(time, minutes);
          a.date = this.currentDay.date;
          activities.push(a);
          this.orderArray.push({ order: count, id: a.id });
          time = a.start;
          minutes = a.duration;
        })
        this.activities = activities;
        this.activityService.activities = activities;
      })
    
      


  }
  newActivity() {
    if (this.currentDay == undefined || this.currentDay.id == 0) {
      this.helper.okAlert("Select Day", "Please select a day.")
      return
    }
    let activity = new Activity(100, "New Activity", 0, "", "", "");
    this.firebaseService.addDocument("/users/" + this.user.coach + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id + "/activities", activity);
  }

  editActivity(activity) {
    this.helper.openModal(EditActivityPage, { activity: activity, currentWeek: this.currentWeek, currentDay: this.currentDay })
  }

  viewActivity(activity) {
    this.helper.openModal(ViewActivityPage, { activity: activity })
  }

  getTimeOfEvent(time, minutes) {
    let x = moment(time, "hh:mm a").add('minutes', minutes).format('LT');
    return x;
  }

  reorderItems(ev) {
    let from = ev.detail.from;
    let to = ev.detail.to;
    let draggedItem = this.orderArray.splice(from, 1)[0];
    this.orderArray.splice(to, 0, draggedItem);
    let count = 0;
    this.orderArray.forEach((item) => {
      count = count + 1;
      item.order = count;

    })
    ev.detail.complete();

    this.updateOrder();

  }

  updateOrder() {

    this.orderArray.forEach((item) => {
      firebase.firestore().doc("/users/" + this.user.coach + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id + "/activities/" + item.id).update({ order: item.order })
    })
  }
}
