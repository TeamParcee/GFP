import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.component.html',
  styleUrls: ['./more-options.component.scss'],
})
export class MoreOptionsComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() { }


  currentWeek;
  user;
  currentDay;

  setDefaultDay() {
    this.firebaseService.setDocument("/users/" + this.user.coach + "/utility/defaultWeek", this.currentWeek);
    this.firebaseService.setDocument("/users/" + this.user.coach + "/utility/defaultDay", this.currentDay);

  }
}
