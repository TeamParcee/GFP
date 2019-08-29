import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FirebaseService } from '../services/firebase.service';
import { NavController } from '@ionic/angular';
import { HelperService } from '../services/helper.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-select-coach',
  templateUrl: './select-coach.page.html',
  styleUrls: ['./select-coach.page.scss'],
})
export class SelectCoachPage implements OnInit {

  constructor(
    private userService: UserService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private helper: HelperService,
  ) { }

  ngOnInit() {
  }

  coaches;

  ionViewWillEnter() {
    this.getCoaches()
  }
  async selectCoach(coach) {

    this.helper.confirmationAlert("Select Coach", "Are you sure you want to select " + coach.fname + " " + coach.lname + " as your coach", { denyText: "Cancel", confirmText: "Select Coach" })
      .then(async (result) => {
        if (result) {
          firebase.auth().onAuthStateChanged(async (user) => {
            let userData: any = await this.userService.getUserFromUid(user.uid);
            if (userData) {
              userData.coach = coach.uid;
              this.firebaseService.updateDocument("/users/" + user.uid, userData).then(() => {
                this.navCtrl.navigateForward("/tabs/home")
              })
            }

          })
        }
      })
  }

  getCoaches() {
    firebase.firestore().collection("/users/")
      .where("isCoach", "==", true)
      .onSnapshot((userSnap) => {
        let users = [];
        userSnap.forEach((user) => {
          users.push(user.data())
        })
        this.coaches = users;
      })
  }
}
