import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { FirebaseService } from './firebase.service';
import { ActivityService } from './activity.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(
    private vibration: Vibration,
    private userService: UserService,
    private firebaseService: FirebaseService,
    private activityService: ActivityService,
    private helper: HelperService,
  ) { }

  showAlert;
  timerInterval;
  vibrationInterval;
  activeTime;
  activeActivity;
  count = 0;
  activeStart;
  length;
  nextActivity;
  user;
  stopAlert = false;
  
  async getUser(){
    this.user = await this.userService.getUserData();
  }
  startPlan() {
    this.firebaseService.setDocument("users/" + this.userService.user.uid + "/utilities/activeActivity", {active: true});
    this.length = this.activityService.activities.length;
    if (this.length > this.count) {
      this.getTimerCount(this.activityService.activities[this.count]);
 
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
        if(this.showAlert){
          this.startVibration();
          this.helper.stopTimerAlert(activity).then(()=>{
            this.stopVibration();
            this.showAlert = true;
          })
        }
        this.activeActivity = activity.name;
        clearInterval(this.timerInterval);
        this.count++;
        this.startPlan();
      } else {
        this.showAlert = true;
        this.nextActivity = {
          time: time,
          name: activity.name,
          start: activity.start
        }
      }
    }, 1000)
  }

  stopVibration(){
    clearInterval(this.vibrationInterval);
    
  }

  startVibration(){
    this.vibrationInterval = setInterval(()=>{
      this.vibration.vibrate(1000);
    }, 2000);
  }

  stopPlan(){
    this.firebaseService.setDocument("users/" + this.userService.user.uid + "/utilities/activeActivity", {active: false})
    this.activeActivity = null;
    clearInterval(this.timerInterval);
    this.count = 0
  }
}
