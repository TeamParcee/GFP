import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.page.html',
  styleUrls: ['./edit-activity.page.scss'],
})
export class EditActivityPage implements OnInit, OnDestroy {
  
  ngOnDestroy() {
    this.firebaseService.updateDocument("/users/" + this.userService.user.uid + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.dayId + "/activities/" + this.activity.id, this.activity)
  }

  constructor(
    private helper: HelperService,
    private userService: UserService,
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    console.log(this.activity)
  }

  activity;
  currentWeek;
  currentDay;
  close() {
    this.helper.closeModal();
  }


}
