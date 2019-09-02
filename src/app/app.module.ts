import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { WeeksComponent } from './practice-plan/weeks/weeks.component';
import { DaysComponent } from './practice-plan/days/days.component';
import { EditActivityPage } from './practice-plan/activities/edit-activity/edit-activity.page';
import { FormsModule } from '@angular/forms';
import { QuillModule,  } from 'ngx-quill'
import { ViewActivityPage } from './practice-plan/activities/view-activity/view-activity.page';
import { ViewDrillPage } from './drill-library/view-drill/view-drill.page';


import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ViewScheduleItemComponent } from './schedule/view-schedule-item/view-schedule-item.component';
import { NewScheduleItemComponent } from './schedule/new-schedule-item/new-schedule-item.component';
import { PastEventsComponent } from './schedule/past-events/past-events.component';
import { AddNewsPage } from './news/add-news/add-news.page';
import { ViewNewsPage } from './news/view-news/view-news.page';
import { PipeModule } from './pipe/pipe.module';
import { AddDrillPage } from './drill-library/add-drill/add-drill.page';
import { EditDrillPage } from './drill-library/edit-drill/edit-drill.page';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDPAW5x5YwQ_lsuy6iO8O5JepFBzrJzLbw",
  authDomain: "gfp-914.firebaseapp.com",
  databaseURL: "https://gfp-914.firebaseio.com",
  projectId: "gfp-914",
  storageBucket: "gfp-914.appspot.com",
  messagingSenderId: "659323488964",
  appId: "1:659323488964:web:b111afd9aa53e21f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations:
  [AppComponent, 
    WeeksComponent, 
    DaysComponent, 
    EditActivityPage, 
    ViewActivityPage, 
    NewScheduleItemComponent,
    AddNewsPage,
    AddDrillPage,
    EditDrillPage,
    ViewNewsPage,
    PastEventsComponent,
    ViewScheduleItemComponent,
    ViewDrillPage],
  entryComponents: [
    WeeksComponent, 
    DaysComponent, 
    NewScheduleItemComponent,
    EditDrillPage,
    PastEventsComponent,
    ViewScheduleItemComponent,
    AddNewsPage,
    ViewNewsPage,
    EditActivityPage, 
    ViewActivityPage, 
    AddDrillPage,
    ViewDrillPage],
  imports: [
    BrowserModule, 
    QuillModule.forRoot(),
    FormsModule,
    IonicModule.forRoot(), 
    PipeModule,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundMode,
    LocalNotifications,
    Vibration,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
