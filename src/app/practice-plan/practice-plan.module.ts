import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PracticePlanPage } from './practice-plan.page';
import { WeeksComponent } from './weeks/weeks.component';

const routes: Routes = [
  {
    path: '',
    component: PracticePlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticePlanPage]
})
export class PracticePlanPageModule {}
