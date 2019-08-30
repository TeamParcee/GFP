import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-view-drill',
  templateUrl: './view-drill.page.html',
  styleUrls: ['./view-drill.page.scss'],
})
export class ViewDrillPage implements OnInit {

  constructor(
    private helper: HelperService,
  ) { }

  ngOnInit(
    
  ) {
  }
  drill;


  close(){
    this.helper.closeModal();
  }
}
