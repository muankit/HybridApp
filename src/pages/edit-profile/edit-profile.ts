import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  saveToast(){
    let toast = this.toastCtrl.create({
      message: 'Saved',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

}
