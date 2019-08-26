import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SelectCoachGuard implements CanActivate {
 
  constructor(
    private router: Router,
    private userService: UserService,
  ){

  }
  canActivate(){
    return this.getCoach();
  }

  async getCoach(){
    let user:any = await this.userService.getUserData()
    if(user.coach){
      return true
    } else {
      this.router.navigateByUrl("/select-coach");
      return false
    }
  }
}
