import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { 

  }

  showRegister: boolean;
  ngOnInit() {
  }

 
  

  
}
