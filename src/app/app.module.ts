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
  declarations: [AppComponent, WeeksComponent, DaysComponent, EditActivityPage],
  entryComponents: [WeeksComponent, DaysComponent, EditActivityPage],
  imports: [
    BrowserModule, 
    QuillModule.forRoot(),
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
