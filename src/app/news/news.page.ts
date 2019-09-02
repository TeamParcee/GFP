import { Component, OnInit } from '@angular/core';
import { AddNewsPage } from './add-news/add-news.page';
import * as firebase from 'firebase';

import { ViewNewsPage } from './view-news/view-news.page';
import { HelperService } from '../services/helper.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(
    private helper: HelperService,
    private userService: UserService,
    
  ) { }

  user;
  news;
  ngOnInit(

  ) {
  }

  async ionViewWillEnter() {
    await this.getUser();
    this.getNews()
  }
  async getUser() {
    this.user = await this.userService.getUserData()
  }
  showAddNews() {
    this.helper.openModal(AddNewsPage, null)
  }

  getNews() {
    firebase.firestore().collection("/users/" + this.user.coach  + "/news")
    .orderBy("created", "desc")
    .onSnapshot((newSnap) => {
      let news = []
      newSnap.forEach((item) => {
        news.push(item.data());
      })
      this.news = news;
    })
  }

  viewNews(item){
    this.helper.openModal(ViewNewsPage, {item: item})
  }
}
