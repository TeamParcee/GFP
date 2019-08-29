import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService, userData } from '../services/user.service';
import { HelperService } from '../services/helper.service';
import { FirebaseService } from '../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private userService: UserService,
    private helper: HelperService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
  ) {
  }


  user;
  coach;
  disableUserName = true;
  profileForm: FormGroup;
  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.user = await this.userService.getUserData();;
    console.log(this.user)
    this.getCoach();
  }

  getCoach() {
    return new Promise((resolve) => {
      return firebase.firestore().doc("/users/" + this.user.coach).onSnapshot((coachSnap) => {
        this.coach = coachSnap.data().fname + " " + coachSnap.data().lname;
        return resolve()
      })
    })

  }

  async becomeCoach() {
    this.helper.confirmationAlert("Head Coach", "Are you sure you want to become a Head Coach. You will be unlinked from your current Coach", { denyText: "Cancel", confirmText: "Become Coach" })
      .then(async (result) => {
        if (result) {
          this.firebaseService.updateDocument("/users/" + this.user.uid, { coach: this.user.uid, isCoach: true});
          this.navCtrl.navigateRoot("/tabs/home");
        }
      })
  }

  changeCoach() {
    this.helper.confirmationAlert("Change Coach", "Are you sure Change Coaches?", { denyText: "Cancel", confirmText: "Change Coach" })
      .then(async (result) => {
        if (result) {
          this.firebaseService.updateDocument("/users/" + this.user.uid, { coach: null });
          this.navCtrl.navigateBack("/select-coach");
        }
      })
  }

  isNotCoachNow() {
    this.helper.confirmationAlert("Head Coach", "Are you not a Coach anymore. Your coaching data will still be saved, just in case you become a Coach again.", { denyText: "Cancel", confirmText: "Not a Coach" })
      .then((result) => {
        if (result) {
          this.firebaseService.updateDocument("users/" + this.userService.user.uid, { coach: null, isCoach: false }).then(() => {
            this.navCtrl.navigateRoot("/select-coach");
          })
        }
      })
  }

  logout() {
    this.userService.logoff();
  }


  // ionViewWillLeave() {
  //   this.saveProfile();
  // }
  // isCoachNow() {
  //   this.helper.confirmationAlert("Head Coach", "Are you sure you want to become a Head Coach. You will be unlinked from your current Coach", { denyText: "Cancel", confirmText: "Become Coach" })
  //     .then((result) => {
  //       if (result) {
  //         console.log(result);
  //         this.firebaseService.updateDocument("users/" + this.userService.user.uid, { coach: this.userService.user.uid, isCoach: true }).then(() => {
  //         })
  //       }
  //     })
  // }

  // isNotCoachNow() {
  //   this.helper.confirmationAlert("Head Coach", "Are you not a Coach anymore. Your coaching data will still be saved, just in case you become a Coach again.", { denyText: "Cancel", confirmText: "Not a Coach" })
  //     .then((result) => {
  //       if (result) {
  //         console.log(result);
  //         this.firebaseService.updateDocument("users/" + this.userService.user.uid, { coach: null, isCoach: false }).then(() => {
  //         })
  //       }
  //     })
  // }

  // async getCoach() {
  //   firebase.firestore().doc("/users/" + this.user.coach).get().then((coach)=>{
  //     this.coach = coach.data().fname + " " + coach.data().lname;
  //   })
  // }

  // saveProfile() {
  //   this.firebaseService.setDocument("users/" + this.userService.user.uid, this.userService.user)
  // }

  // changeCoach() {
  //   this.helper.confirmationAlert("Change Head Coach", "Are you sure you want to change your Head Coach", { denyText: "Cancel", confirmText: "Change Coach" })
  //     .then((result) => {
  //       if (result) {
  //         this.firebaseService.updateDocument("users/" + this.userService.user.uid, { coach: null });
  //         this.navCtrl.navigateBack("/select-coach");
  //       }
  //     })
  // }
}
