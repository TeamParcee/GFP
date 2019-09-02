import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AddDrillPage } from '../add-drill/add-drill.page';
import { ViewDrillPage } from '../view-drill/view-drill.page';
import { EditDrillPage } from '../edit-drill/edit-drill.page';


@Component({
  selector: 'app-my-drills',
  templateUrl: './my-drills.page.html',
  styleUrls: ['./my-drills.page.scss'],
})
export class MyDrillsPage implements OnInit {

  constructor(
    private helper: HelperService,
    private userService: UserService,
    private firebaseService: FirebaseService,
  ) { }


  user;
  drills;
  ngOnInit() {
  }

async ionViewWillEnter(){
  await this.getUser();
  this.getDrills();
}
async getUser(){
  this.user = await this.userService.getUserData();
}
  getDrills(){
    firebase.firestore().collection("/users/" + this.user.coach + "/drills/")
    .onSnapshot((snapshot)=>{
      let drills = [];
      snapshot.forEach((drill)=>{
        drills.push(drill.data())
      })
      this.drills = drills;
    })
  }

  addDrill(){
    this.helper.openModal(AddDrillPage, null)
  }

  view(drill){
    this.helper.openModal(ViewDrillPage, {drill: drill})
  }
  edit(drill){
    this.helper.openModal(EditDrillPage, {drill: drill})
  }
}
