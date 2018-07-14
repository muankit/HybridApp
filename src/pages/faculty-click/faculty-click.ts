import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { HomeInstitutePage } from '../home-institute/home-institute';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-faculty-click',
  templateUrl: 'faculty-click.html',
})
export class FacultyClickPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams , 
              public alertCtrl : AlertController,
              public toastCtrl : ToastController,
              private callNumber : CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyClickPage');
  }

  selectEvent(){
    this.navCtrl.setRoot(HomeInstitutePage).then(()=>{
      let index = this.navCtrl.length()-2;
      this.navCtrl.remove(index);

      let toast = this.toastCtrl.create({
        message : 'Selected',
        duration : 1000,
        position : 'top'
      });
      toast.present();
    });
  }
  reviewEvent(){
    // implement later using star and its color changes to pink
  }
  callEvent(){
    this.callNumber.callNumber("7737830189", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));  
  }

}
