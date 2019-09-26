import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { WeeksComponent } from './weeks/weeks.component';
import { ActivityService } from '../services/activity.service';
import * as firebase from 'firebase';
import { UserService } from '../services/user.service';
import { DaysComponent } from './days/days.component';
import * as moment from 'moment';
import { FirebaseService } from '../services/firebase.service';
import { Subject } from 'rxjs';
import { TimerService } from '../services/timer.service';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { StartTimeComponent } from './start-time/start-time.component';
import { MoreOptionsComponent } from './more-options/more-options.component';

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
    private timerService: TimerService,
    private background: BackgroundMode,
  
  ) { }

  ngOnInit() {
  }

  currentWeek;
  currentDay;
  date;
  showCalendar;
  showStartTime;
  showSelectTime;
  showSelectDate;
  startTime;
  nextActivity;
  currentActivity;
  timerInterval;
  showTimer;
  timerStarted;
  user;

  async ionViewWillEnter() {
    await this.getUser();
    this.getCurrentWeek();
    this.getCurrentDay();
  }


 async getUser(){
    this.user = await this.userService.getUserData()
  }
  viewWeeks() {
    this.helper.presentPopover(event, WeeksComponent, { currentWeek: this.currentWeek })
  }

  viewDays() {
    this.helper.presentPopover(event, DaysComponent, { currentWeek: this.currentWeek, currentDay: this.currentDay})
  }

  getCurrentWeek() {
    firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentWeek/").onSnapshot(async () => {
      this.currentWeek = await this.activityService.getCurrentWeek();
    })
  }

  getCurrentDay() {
    
    firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentDay/").onSnapshot(async () => {
      this.currentDay = await this.activityService.getCurrentDay();
      if(this.currentDay){
        this.startTime = (this.currentDay.start) ? this.currentDay.start : null;
        this.activityService.startTime = this.startTime;
        this.date = this.currentDay.date;
        this.showSelectTime = true;
        this.showSelectDate = true;
      } else {
        this.showSelectTime = false;
        this.showSelectDate = false;
      }
     
      
    })
  }

  async dateSelected(event) {

    let date = moment(event.toString()).format('ll');
    this.firebaseService.updateDocument("/users/" + this.user.coach + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id, { date: date })
    this.showCalendar = false;
    this.date = date;
  }

  checkDay() {
    if (this.currentDay.id == 0) {
      this.helper.okAlert("Select Day", "Please select a day.")
      return;
    }
    this.showCalendar = !this.showCalendar
  }

  checkStartTime(event) {
    if (this.currentDay.id == 0) {
      this.helper.okAlert("Select Day", "Please select a day.")
      return;
    }
    this.helper.presentPopover(event, StartTimeComponent,  { currentWeek: this.currentWeek, currentDay: this.currentDay, startTime: this.startTime, user: this.user})
  }


  runTimer(){
  this.background.enable();
    this.showTimer = true;
    if (!this.timerStarted){
      this.timerStarted = true;
      this.timerService.startPlan();  
      this.timerInterval = setInterval(()=>{
        this.nextActivity = this.timerService.nextActivity;
        this.currentActivity = this.timerService.currentActivity;
      }, 1000)
    }
      
  }
  stopTimer(){
    this.background.disable();
    this.timerService.stopPlan();
    clearInterval(this.timerInterval);
    this.showTimer = false;
    this.timerStarted = false;
  }
  

  getDefaultDay(){
    this.currentWeek = this.firebaseService.getDocument("/users/" + this.user.coach + "/utilities/defaultWeek");
    this.currentDay = this.firebaseService.getDocument("/users/" + this.user.coach + "/utilities/defaultDay");
  }

  

  showMoreOptions(event){
    this.helper.presentPopover(event, MoreOptionsComponent, { currentWeek: this.currentWeek, currentDay: this.currentDay, startTime: this.startTime, user: this.user})
  }
}
