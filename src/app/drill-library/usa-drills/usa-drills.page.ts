import { Component, OnInit } from '@angular/core';
import { DrillsService } from 'src/app/services/drills.service';
import { HelperService } from 'src/app/services/helper.service';
import { ViewDrillPage } from '../view-drill/view-drill.page';

@Component({
  selector: 'app-usa-drills',
  templateUrl: './usa-drills.page.html',
  styleUrls: ['./usa-drills.page.scss'],
})
export class UsaDrillsPage implements OnInit {

  constructor(
    private drillsService: DrillsService,
    private helper: HelperService,
  ) { }

  drills = this.drillsService.drillData;
  ngOnInit() {
  }
  viewDrill(drill){
    this.helper.openModal(ViewDrillPage, {drill :drill})
  }
}
