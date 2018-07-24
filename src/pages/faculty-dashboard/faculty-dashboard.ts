import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-faculty-dashboard',
  templateUrl: 'faculty-dashboard.html',
})
export class FacultyDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyDashboardPage');
  }

  selctBtnClick(){
    let selectToast = this.toastCtrl.create({
      position : 'top',
      message : 'Selected' ,
      duration : 1000
    });
    selectToast.present();
  }

  deleteBtnClick(){
    let deleteToast = this.toastCtrl.create({
      position : 'top',
      message : 'Deleted' ,
      duration : 1000
    });
    deleteToast.present();
  }

}
