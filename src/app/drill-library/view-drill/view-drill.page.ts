import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-drill',
  templateUrl: './view-drill.page.html',
  styleUrls: ['./view-drill.page.scss'],
})
export class ViewDrillPage implements OnInit {

  constructor(
    private helper: HelperService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(
    
  ) {
  }
  drill;
  isYoutube;

  ionViewWillEnter(){
    this.checkIsYoutube();
  }
  close(){
    this.helper.closeModal();
  }

  checkIsYoutube(){
    console.log(this.drill);
    if(this.drill.Video.includes("youtu")){
      this.isYoutube = true;
    } else {
      this.isYoutube = false;
    }
  }

  sanatizeURl(url){
    let newUrl:any = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
    return newUrl
  }
}
