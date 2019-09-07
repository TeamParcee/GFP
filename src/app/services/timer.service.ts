import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { FirebaseService } from './firebase.service';
import { ActivityService } from './activity.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HelperService } from './helper.service';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(
    private ringtones: NativeRingtones,
    private vibration: Vibration,
    private userService: UserService,
    private firebaseService: FirebaseService,
    private activityService: ActivityService,
    private helper: HelperService,
    private nativeAudio: NativeAudio
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
  currentActivity;
  
  async getUser(){
    this.user = await this.userService.getUserData();
  }
  startPlan() {
    this.firebaseService.setDocument("users/" + this.userService.user.uid + "/utilities/activeActivity", {active: true});
    this.length = this.activityService.activities.length;
    if (this.length > this.count) {
      this.getTimerCount(this.activityService.activities[this.count], this.activityService.activities[this.count - 1] );
 
    } else {
      this.activeActivity = null;
      clearInterval(this.timerInterval);
      this.count = 0
    }

  }
  getTimerCount(activity, currentActivity) {
    
    if(!currentActivity){
      currentActivity = {...activity};
      currentActivity.name = "Time Until First Activity"
    }
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
        this.currentActivity  = {
          time: time,
          name: currentActivity.name,
          start: currentActivity.start
        }
        this.nextActivity = {
          name: activity.name,
          start: activity.start
        }
      }
    }, 1000)
  }

  stopVibration(){
    this.stopRingtone();
    clearInterval(this.vibrationInterval);
    
  }

  startVibration(){
    this.startRingtone();
    this.vibrationInterval = setInterval(()=>{
      this.vibration.vibrate(1000);
    }, 1000);
  }
startRingtone(){
  this.nativeAudio.preloadSimple('uniqueId1', '../../assets/ringtones/gfp.mp3');
  this.nativeAudio.play('uniqueId1');
  this.ringtones.playRingtone('../../assets/ringtones/gfp.mp3');


}

stopRingtone(){
  this.nativeAudio.preloadSimple('uniqueId1', '../../assets/ringtones/gfp.mp3');
  this.nativeAudio.stop('uniqueId1');
  this.ringtones.stopRingtone('../../assets/ringtones/gfp.mp3');
}
  stopPlan(){
    this.firebaseService.setDocument("users/" + this.userService.user.uid + "/utilities/activeActivity", {active: false})
    this.activeActivity = null;
    clearInterval(this.timerInterval);
    this.count = 0
  }
}
