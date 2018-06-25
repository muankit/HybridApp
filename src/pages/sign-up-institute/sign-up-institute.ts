import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';

/**
 * Generated class for the SignUpInstitutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-institute',
  templateUrl: 'sign-up-institute.html',
})
export class SignUpInstitutePage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpInstitutePage');
  }

  goToInstituteForm(){
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
            this.navCtrl.push(SliderPage);     
          }
        }
      ],
    });
    alert.present();
  }
}
