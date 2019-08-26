import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CompleteRegisterComponent } from './complete-register/complete-register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage, RegisterComponent, LoginComponent, CompleteRegisterComponent]
})
export class AuthPageModule {}
