import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router
  ){

  }

canLoad(){
  return this.checkUser()
}


checkUser(): any{

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      return true
    } else {
      this.router.navigateByUrl("/auth");
      return false
    }
  })
}

}
