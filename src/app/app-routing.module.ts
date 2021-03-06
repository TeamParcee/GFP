import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SelectCoachGuard } from './select-coach/select-coach.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canLoad: [AuthGuard], canActivate: [SelectCoachGuard]},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule',  canLoad: [AuthGuard], canActivate: [SelectCoachGuard] },
  { path: 'select-coach', loadChildren: './select-coach/select-coach.module#SelectCoachPageModule', canLoad: [AuthGuard]},
  { path: 'drill-library', loadChildren: './drill-library/drill-library.module#DrillLibraryPageModule' },
  { path: 'practice-plan', loadChildren: './practice-plan/practice-plan.module#PracticePlanPageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canLoad: [AuthGuard], canActivate: [SelectCoachGuard] },
  { path: 'edit-activity', loadChildren: './practice-plan/activities/edit-activity/edit-activity.module#EditActivityPageModule' },
  { path: 'view-activity', loadChildren: './practice-plan/activities/view-activity/view-activity.module#ViewActivityPageModule' },  { path: 'usa-drills', loadChildren: './drill-library/usa-drills/usa-drills.module#UsaDrillsPageModule' },
  { path: 'my-drills', loadChildren: './drill-library/my-drills/my-drills.module#MyDrillsPageModule' },
  { path: 'view-drill', loadChildren: './drill-library/view-drill/view-drill.module#ViewDrillPageModule' },
  { path: 'add-drill', loadChildren: './drill-library/add-drill/add-drill.module#AddDrillPageModule' },
  { path: 'edit-drill', loadChildren: './drill-library/edit-drill/edit-drill.module#EditDrillPageModule' },
  { path: 'edit-schedule-item', loadChildren: './schedule/edit-schedule-item/edit-schedule-item.module#EditScheduleItemPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
