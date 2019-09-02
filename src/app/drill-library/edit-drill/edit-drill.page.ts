import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-drill',
  templateUrl: './edit-drill.page.html',
  styleUrls: ['./edit-drill.page.scss'],
})
export class EditDrillPage implements OnInit {

  constructor(
    private helper: HelperService,
    private userService: UserService,
    private firebaseService: FirebaseService,

  ) { }

  ngOnInit() {
  }
drill;
user;
ionViewWillEnter(){
this.getUser();
}
async getUser(){
  this.user = await this.userService.getUserData();
}
saveDrill(drill){
  this.firebaseService.updateDocument("/users/" + this.user.coach + "/drills/" + this.drill.id, drill);
  this.close();
}
close(){
  this.helper.closeModal();
}
deleteDrill(drill){
  this.helper.confirmationAlert("Delete Drill", "Are you sure you want to delete this drill? It can not be undone", {denyText: "Cancel", confirmText: "Delete Drill"})
  .then((result)=>{
    if(result){
      this.firebaseService.deleteDocument("/users/" + this.user.coach + "/drills/" + drill.id);
      this.close();
    }
  })
 
}
}
