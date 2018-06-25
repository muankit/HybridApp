import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FacultyFormPage } from '../faculty-form/faculty-form';
import { SliderPage } from '../slider/slider';


@IonicPage()
@Component({
  selector: 'page-sign-up-faculty',
  templateUrl: 'sign-up-faculty.html',
})
export class SignUpFacultyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpFacultyPage');
  }
  goToFacultyForm(){
    let alert = this.alertCtrl.create({
      title : 'Verify OTP',
      inputs : [
        {
          name : 'OTP',
          type : 'number',
        }
      ],
      buttons : [
        {
          text : 'Cancel' , 
          role : 'cancel',
          handler :() => {
            console.log("Cancel Clicked");
          }
        },
        {
          text : 'Send Otp',
          role : 'send',
          handler : () =>{
            this.navCtrl.push(SliderPage , {title : 'faculty'});     
          }
        }
      ],
    });
    alert.present();
  }
}
