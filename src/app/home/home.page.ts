import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import * as firebase from 'firebase';

import { ProfilePage } from '../profile/profile.page';

import { Vibration } from '@ionic-native/vibration/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HelperService } from '../services/helper.service';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private backgroundMode: BackgroundMode,
    
    private helper: HelperService,
    private userService: UserService,
    private vibration: Vibration,
    private navCtrl: NavController,
    private localNotifications: LocalNotifications,
  ) { }


  user;
  nextItem;
  vibrateInterval;
  ngOnInit() {

    
  }

  async getUser() {
    this.user = await this.userService.getUserData();
  }
  async ionViewWillEnter() {

    await this.getUser();
    this.getSchedule();
    this.getNews();
  }

  currentEvent;
  time;
  news;
 


  
  viewProfile() {
    this.navCtrl.navigateForward("/profile")
  }

  getNews(){
    firebase.firestore().collection("/users/" + this.user.coach + "/news")
    .orderBy("created", "desc")
    .onSnapshot((snapshot)=>{
      let news = [];
      snapshot.forEach((item)=>{
        news.push(item.data())
      })
      this.news = news.shift();
    })
  }
  getSchedule() {
    firebase.firestore().collection("users/" + this.user.coach + "/schedule")
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
        this.nextItem = schedule.shift();
      })
  }

  vibrate() {
    this.vibrateInterval = setInterval(() => {
      this.vibration.vibrate(1000)
    }, 2000)
    this.localNotifications.schedule({
      id: 1,
      title: "GFPlanner",
      text: 'Activity Has Completed',
      sound: 'file://beep.caf',
    });
  }

  stopVibrate() {
    clearInterval(this.vibrateInterval)
  }
}
