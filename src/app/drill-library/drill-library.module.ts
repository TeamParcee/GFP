import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DrillLibraryPage } from './drill-library.page';

const routes: Routes = [
  {
    path: '',
    component: DrillLibraryPage,
    children: [
      {
        path: 'usaDrills',
        children: [
          {
            path: '',
            loadChildren: './usa-drills/usa-drills.module#UsaDrillsPageModule'
          }
        ]
      }, {
        path: 'myDrills',
        children: [
          {
            path: '',
            loadChildren: './my-drills/my-drills.module#MyDrillsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'usaDrills',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DrillLibraryPage]
})
export class DrillLibraryPageModule {}
