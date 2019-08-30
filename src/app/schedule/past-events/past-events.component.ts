import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss'],
})
export class PastEventsComponent implements OnInit {

  constructor(
    private helper: HelperService,
    private userService: UserService,
    
  ) { }

  schedule;
  user;

  ngOnInit() {}

  async ionViewWillEnter(){
    await this.getUser();
    this.getSchedule();
  }
  
  async getUser(){
    this.user = await this.userService.getUserData();
  }
  getSchedule() {
    firebase.firestore().collection("users/" + this.user.coach + "/schedule")
    .orderBy("datetime", "desc")
    .onSnapshot((snapshot) => {
      let schedule = [];
      snapshot.forEach((event) => {
        let date = new Date(event.data().datetime);
        let today = new Date();
        if (date < today) {
          schedule.push(event.data());
        }

      })
      this.schedule = schedule
    })
  }

  close(){
    this.helper.closeModal()
  }
}
