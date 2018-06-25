import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidL  oad LoginPage');
  }

  goToHome(){
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
            this.navCtrl.push(HomePage);     
          }
        }
      ],
    });
    alert.present();
  }

  newUserClick(){
    this.navCtrl.push(TabsPage);
  }
}
