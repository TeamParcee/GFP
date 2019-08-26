import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.component.html',
  styleUrls: ['./complete-register.component.scss'],
})
export class CompleteRegisterComponent implements OnInit {

  constructor(
    private helper: HelperService,
    private router: Router,
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.profileForm = this.formBuilder.group({
      isCoach: ['', []],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      username: ['', Validators.required]
    })

  }


  profileForm: FormGroup;
  user;

  ngOnInit() { 
    this.getUser();
  }

  register(){
    this.helper.showLoading();
    let data = this.profileForm.value;
    this.firebaseService.setDocument("users/" + this.user.uid, data).then(()=>{
      this.helper.hideLoading();
      this.router.navigateByUrl("/select-coach");
    })
  }

  getUser(){
    this.user = this.userService.user;
  }
}
