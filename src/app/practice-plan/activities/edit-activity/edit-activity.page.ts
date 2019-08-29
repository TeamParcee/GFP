import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.page.html',
  styleUrls: ['./edit-activity.page.scss'],
})
export class EditActivityPage implements OnInit, OnDestroy {
  
  ngOnDestroy() {
    
    this.firebaseService.updateDocument("/users/" + this.user.coach + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id + "/activities/" + this.activity.id, this.activity)
  }

  constructor(
    private helper: HelperService,
    private userService: UserService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
  ) { }

  async ngOnInit() {
    await this.getUser();
  }

  activity;
  currentWeek;
  currentDay;
  user;
  close() {
    this.helper.closeModal();
  }

  async getUser(){
    this.user = await this.userService.getUserData();
  }
  delete() {
  
    this.helper.confirmationAlert("Delete Activity", "Are you sure you want to delete this Activity?", { denyText: "Cancel", confirmText: "Delete Activity" })
      .then((result) => {
        if (result) {
          this.firebaseService.deleteDocument("/users/" + this.user.coach + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id + "/activities/" + this.activity.id)
          .then(() => {
            this.helper.closeModal()
          })

        }
      })
  }
}
