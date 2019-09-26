import { Component, OnInit } from '@angular/core';
import { FirebaseError } from 'firebase';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-start-time',
  templateUrl: './start-time.component.html',
  styleUrls: ['./start-time.component.scss'],
})
export class StartTimeComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private userService: UserService,
  ) { }

  user;
  currentWeek;
  currentDay;
  startTime;

  ngOnInit() {
  }


  
  
 
  updateTime() {
    this.firebaseService.updateDocument("/users/" + this.user.uid + "/weeks/" + this.currentWeek.weekId + "/days/" + this.currentDay.id, { start: this.startTime })
    this.firebaseService.updateDocument("/users/" + this.userService.user.uid + "/utility/currentDay/", { start: this.startTime })
  }
}
