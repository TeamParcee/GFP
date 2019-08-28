import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService, userData } from '../services/user.service';
import { HelperService } from '../services/helper.service';
import { FirebaseService } from '../services/firebase.service';

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
    this.getUser();
  }


  user;
  coach;
  disableUserName = true;
  profileForm: FormGroup;
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUser();
  }
  logout(){
    this.userService.logoff();
  }
 async getUser(){
   let user = this.userService.user;
      if(!user){
        this.user = new userData("", "", this.userService.user.uid, "", false, "", "");
        this.disableUserName = false;
      } else {
        this.user =  user;
        this.getCoach();
      }
      
      
  }

  ionViewWillLeave(){
    this.saveProfile();
  }
  isCoachNow(){
    this.helper.confirmationAlert("Head Coach", "Are you sure you want to become a Head Coach. You will be unlinked from your current Coach", {denyText: "Cancel", confirmText: "Become Coach"})
    .then((result)=>{
      if(result){
        this.firebaseService.updateDocument("users/" + this.user.uid, {coach: this.user.uid, isCoach: true}).then(()=>{
          this.getUser();
        })
      }
    })
  }

  isNotCoachNow(){
    this.helper.confirmationAlert("Head Coach", "Are you not a Coach anymore. Your coaching data will still be saved, just in case you become a Coach again.", {denyText: "Cancel", confirmText: "Not a Coach"})
    .then((result)=>{
      if(result){
        this.firebaseService.updateDocument("users/" + this.user.uid, {coach: null, isCoach: false}).then(()=>{
          this.getUser();
        })
      }
    })
  }

  async getCoach(){
    let coach:any = await this.userService.getUserFromUid(this.user.coach)
    this.coach = coach.fname + " " + coach.lname;
  }

  saveProfile(){
    this.firebaseService.setDocument("users/" + this.user.uid, this.user)
  }

  changeCoach(){
    this.helper.confirmationAlert("Change Head Coach", "Are you sure you want to change your Head Coach", {denyText: "Cancel", confirmText: "Change Coach"})
    .then((result)=>{
      if(result){
        this.firebaseService.updateDocument("users/" + this.user.uid, {coach: null});
        this.navCtrl.navigateBack("/select-coach");
      }
    })
  }
}
