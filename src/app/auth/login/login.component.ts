import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private navCtrl: NavController,
    private helper: HelperService,
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

  loginForm: FormGroup

  login(){
    let form = this.loginForm.value;
    this.userService.login(form.email, form.password).then(()=>{
      this.navCtrl.navigateForward("/tabs/home")
    }).catch((e)=>{
      this.helper.okAlert("Problem Logging In", e.message)
    })
  }

  
}
