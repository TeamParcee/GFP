import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-drill',
  templateUrl: './add-drill.page.html',
  styleUrls: ['./add-drill.page.scss'],
})
export class AddDrillPage implements OnInit {

  constructor(
    private helper: HelperService,
    private firebaseService: FirebaseService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }
user;
drill;
video;
position;

async ionViewWillEnter(){
    await this.getUser();
}
async getUser(){
  this.user = await this.userService.getUserData();
}
saveDrill(){
this.firebaseService.addDocument("/users/" + this.user.coach + "/drills", {
  Drill: this.drill,
  Position: this.position,
  Video: this.video
})
this.helper.closeModal();
}
close(){
  this.helper.closeModal();
}
}
