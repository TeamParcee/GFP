import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';
import { NavComponent } from '@ionic/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private helper: HelperService,
  ) {


  }

  profileForm: FormGroup;
  user;
  showRegister: boolean;
  accountCreated: boolean;

  ionViewWillEnter() {
    firebase.auth().onAuthStateChanged(async(user) => {
      this.accountCreated = (user) ? await this.getUserData() : false;
     this.checkAccountCreated()
    })
  }
  ngOnInit() {

  }


  async getUserData() {
    this.user = await this.userService.getUserData();
    return true
  }
  logout() {
    this.userService.logoff().then(() => {
      this.navCtrl.navigateBack("/auth");
    })
  }

  checkAccountCreated(){

    if(this.user){
      if(
        this.user.fname ||
        this.user.lname 
      ){
        this.navCtrl.navigateForward("/home");
      } 
    }
   
  }
}
