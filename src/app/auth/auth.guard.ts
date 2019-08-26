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

async canLoad(){
  return await this.checkUser()
}


checkUser(): any{
return new Promise((resolve)=>{
  firebase.auth().onAuthStateChanged((user)=>{
    
    if(user){
      return resolve(true)
    } else {
      this.router.navigateByUrl("/auth");
      return resolve(false)
    }
  })
})

}

}
