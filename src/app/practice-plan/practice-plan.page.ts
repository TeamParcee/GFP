import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { WeeksComponent } from './weeks/weeks.component';
import { ActivityService } from '../services/activity.service';
import * as firebase from 'firebase';
import { UserService } from '../services/user.service';
import { DaysComponent } from './days/days.component';

@Component({
  selector: 'app-practice-plan',
  templateUrl: './practice-plan.page.html',
  styleUrls: ['./practice-plan.page.scss'],
})
export class PracticePlanPage implements OnInit {

  constructor(
    private userService: UserService,
    private activityService: ActivityService,
    private helper:HelperService,
  ) { }

  ngOnInit() {
  }

  currentWeek;
  currentDay;
  
  async ionViewWillEnter(){
    
    this.getCurrentWeek();
  }
  viewWeeks(){
    this.helper.presentPopover(event, WeeksComponent, {currentWeek: this.currentWeek})
  }

  viewDays(){
    this.helper.presentPopover(event, DaysComponent, {currentWeek: this.currentWeek, currentDay: this.currentDay})
  }

  getCurrentWeek(){
    firebase.firestore().doc("/users/" + this.userService.user.uid + "/utility/currentWeek/").onSnapshot(async()=>{
      this.currentWeek = await this.activityService.getCurrentWeek();
    })
  }
}
