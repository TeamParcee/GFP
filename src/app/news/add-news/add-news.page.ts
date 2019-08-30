import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { UserService } from 'src/app/services/user.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
})
export class AddNewsPage implements OnInit {

  constructor(
    private helper:HelperService,
    private firebaseService: FirebaseService,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  title;
  message;
  user;

  ionViewWillEnter(){
    this.getUser();
  }
  async getUser(){
    this.user = await this.userService.getUserData();
  }
  addNews(){
    this.helper.confirmationAlert("Create News Item", "Are you sure you want to create this news item?", {denyText: "Cancel", confirmText: "Create News"})
    .then(async(result)=>{
      if(result){
        this.firebaseService.addDocument("users/" + this.user.uid + "/news", {
          title: this.title,
          message: this.message,
          created: moment().calendar(),
        }).then(()=>{
          this.close()
        })
      }
    })
  }

  close(){
    this.helper.closeModal();
  }
}
