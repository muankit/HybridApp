import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EntrySlidesPage } from '../entry-slides/entry-slides';
//import { Keyboard } from '@ionic-native/keyboard';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl : AlertController) {
  //  keyboard.disableScroll(true);
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
            this.navCtrl.setRoot(HomePage).then(()=>{
              let index = this.navCtrl.length()-2;
              this.navCtrl.remove(index);
            });
         }
        }
      ],
    });
    alert.present();
  }

  newUserClick(){
    this.navCtrl.push(EntrySlidesPage).then(()=>{
      let index = this.navCtrl.length()-2;
      this.navCtrl.remove(index);
    });
  }

  // ionViewWillLeave(){
  //   this.navCtrl.pop();
  // }
}
