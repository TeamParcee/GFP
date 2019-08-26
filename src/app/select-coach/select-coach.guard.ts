import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';
import { HelperService } from '../services/helper.service';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SelectCoachGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private userService: UserService,
    private helper: HelperService,
  ) {

  }

  async canActivate() {

    return await this.getCoach();
  }


  getCoach(): any {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(async (userFirebase) => {
        let user: any = await this.userService.getUserData();
        if (user) {
          if (user.coach) {
            return resolve(true)
          } else {
            this.router.navigateByUrl("select-coach")
            return resolve(false);
          }
        } else{
          this.navCtrl.navigateBack("/auth");
        }

      })
    })
  }
}
