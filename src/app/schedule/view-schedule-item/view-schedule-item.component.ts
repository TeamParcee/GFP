import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-view-schedule-item',
  templateUrl: './view-schedule-item.component.html',
  styleUrls: ['./view-schedule-item.component.scss'],
})
export class ViewScheduleItemComponent implements OnInit {

  constructor(
    private helper: HelperService
  ) { }

  ngOnInit() { }
  item;

  getSchedule() {
  //   firebase.firestore().collection("schedule")
  //     .orderBy("datetime")
  //     .onSnapshot((snapshot) => {
  //       let schedule = [];
  //       snapshot.forEach((event) => {
  //         let date = new Date(event.data().datetime);
  //         let today = new Date();
  //         if (date > today) {
  //           schedule.push(event.data());
  //         }

  //       })
  //       this.schedule = schedule.slice(1);
  //       this.nextItem = schedule.shift();
  //     })
   }

   close(){
     this.helper.closeModal();
   }
}
