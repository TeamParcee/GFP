import { Component, OnInit } from '@angular/core';
import { DrillsService } from '../services/drills.service';

@Component({
  selector: 'app-drill-library',
  templateUrl: './drill-library.page.html',
  styleUrls: ['./drill-library.page.scss'],
})
export class DrillLibraryPage implements OnInit {

  constructor(
    private drillService: DrillsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  }
  usaDrills = this.drillService.drillData;


}
