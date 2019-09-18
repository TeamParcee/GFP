import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HelperService } from 'src/app/services/helper.service';
import { FirebaseError } from 'firebase';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-schedule-item',
  templateUrl: './edit-schedule-item.page.html',
  styleUrls: ['./edit-schedule-item.page.scss'],
})
export class EditScheduleItemPage implements OnInit {

  constructor(
    private userService: UserService,
    private helper: HelperService,
    private firebaseService: FirebaseService,
  ) { }

  user;
  event;
  tempEvent;

  async getUser() {
    this.user = await this.userService.getUserData()
  }
  ngOnInit() { }

  async ionViewWillEnter(){
    await this.getUser();
  }
  ionViewDidEnter(){
    this.tempEvent = {...this.event};
    console.log(this.tempEvent);
  }

  close() {
    this.helper.closeModal();
  }

  save() {
    this.event = this.tempEvent;
    this.firebaseService.updateDocument("users/" + this.user.uid + "/schedule/" + this.event.id, this.event);
    this.helper.okAlert("Event Updated", "Your event has been updated");
    this.close();
  }
}
