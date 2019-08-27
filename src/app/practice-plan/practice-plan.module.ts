import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DatePickerModule } from 'ionic4-date-picker'

import { PracticePlanPage } from './practice-plan.page';
import { WeeksComponent } from './weeks/weeks.component';
import { ActivitiesComponent } from './activities/activities.component';

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
    DatePickerModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticePlanPage, ActivitiesComponent]
})
export class PracticePlanPageModule {}
