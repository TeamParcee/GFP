import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { WeeksComponent } from './weeks/weeks.component';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-practice-plan',
  templateUrl: './practice-plan.page.html',
  styleUrls: ['./practice-plan.page.scss'],
})
export class PracticePlanPage implements OnInit {

  constructor(
    private activityService: ActivityService,
    private helper:HelperService,
  ) { }

  ngOnInit() {
  }

  currentWeek;
  async ionViewWillEnter(){
    this.currentWeek = await this.activityService.getCurrentWeek();
  }
  viewWeeks(){
    this.helper.presentPopover(event, WeeksComponent)
  }
}
