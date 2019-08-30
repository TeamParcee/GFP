import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-schedule-item',
  templateUrl: './new-schedule-item.component.html',
  styleUrls: ['./new-schedule-item.component.scss'],
})
export class NewScheduleItemComponent implements OnInit {

  constructor(
    private helper: HelperService,
    private firebaseService: FirebaseService,
    private userService: UserService,
    
  ) { }

  itemType;
  datetime;
  notes;
  location;
  user;

  async getUser() {
    this.user = await this.userService.getUserData()
  }
  ngOnInit() { }

  async ionViewWillEnter(){
    await this.getUser();
  }
  close() {
    this.helper.closeModal();
  }

  save() {
    let event = {
      itemType: this.itemType,
      datetime: this.datetime,
      location: this.location,
      notes: this.notes,
    }
    this.firebaseService.addDocument("users/" + this.user.uid + "/schedule", event);
    this.helper.okAlert("New Item Added", "Your item has been added");
    this.close();
  }
}
