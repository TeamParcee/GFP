import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditScheduleItemPage } from './edit-schedule-item.page';

const routes: Routes = [
  {
    path: '',
    component: EditScheduleItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditScheduleItemPage]
})
export class EditScheduleItemPageModule {}
