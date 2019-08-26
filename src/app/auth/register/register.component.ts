import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private helper: HelperService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      isCoach: ['', []],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required]
    })
  }

  ngOnInit() { }


  registerForm: FormGroup;

  register() {
    this.helper.showLoading();
    let form = this.registerForm.value;
    this.userService.createUser(form.email, form.password, form.username, {...form}).then(() => {
    this.helper.hideLoading();
    this.router.navigateByUrl("/select-coach")
    }).catch((e)=>{
      this.helper.hideLoading();
      this.helper.okAlert("Error Occured", e.message);
    })
  }


}
