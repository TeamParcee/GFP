import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { FirebaseService } from './firebase.service';
import { ActivityService } from './activity.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(
    private userService: UserService,
    private firebaseService: FirebaseService,
    private activityService: ActivityService,
  ) { }

  timerInterval
  activeTime;
  activeActivity;
  count = 0;
  activeStart;
  length;
  nextActivity;
  user;

  
  startPlan() {
    this.firebaseService.setDocument("users/" + this.userService.user.uid + "/utilities/activeActivity", {active: true});
    this.length = this.activityService.activities.length;
    if (this.length > this.count) {
      this.getTimerCount(this.activityService.activities[this.count])
    } else {
      this.activeActivity = null;
      clearInterval(this.timerInterval);
      this.count = 0
    }

  }
  getTimerCount(activity) {
    this.timerInterval = setInterval(() => {
      let datetime = activity.date + " " + activity.start;
      let now = new Date().getTime();
      let countDownDate = new Date(datetime).getTime();

      let distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let time = hours + ":" + minutes + ":" + seconds;
      if (distance < 0) {
        this.activeTime = "Time Past";
        this.activeActivity = activity.name;
        clearInterval(this.timerInterval);
        this.count++;
        this.startPlan();
      } else {
        this.nextActivity = {
          time: time,
          name: activity.name,
          start: activity.start
        }
      }
    }, 1000)

  }

  stopPlan(){
    this.firebaseService.setDocument("users/" + this.userService.user.uid + "/utilities/activeActivity", {active: false})
    this.activeActivity = null;
    clearInterval(this.timerInterval);
    this.count = 0
  }
}
