import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      }, {
        path: 'drill-library',
        children: [
          {
            path: '',
            loadChildren: '../drill-library/drill-library.module#DrillLibraryPageModule'
          }
        ]
      }, {
        path: 'practice-plan',
        children: [
          {
            path: '',
            loadChildren: '../practice-plan/practice-plan.module#PracticePlanPageModule'
          }
        ]
      },{
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../schedule/schedule.module#SchedulePageModule'
          }
        ]
      },{
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
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
  declarations: [TabsPage]
})
export class TabsPageModule { }
