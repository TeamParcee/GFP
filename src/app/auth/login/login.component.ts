import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
      this.router.navigateByUrl("/tabs/home")
    })
  }

  
}
