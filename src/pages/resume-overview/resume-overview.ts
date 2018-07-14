import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home-faculty/home';

@IonicPage()
@Component({
  selector: 'page-resume-overview',
  templateUrl: 'resume-overview.html',
})
export class ResumeOverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumeOverviewPage');
  }

  goToQuestionPage(){
    let alert = this.alertCtrl.create({
      title : 'Assessment Question',
      message : 'Why should you be hired for this Position?',
      inputs : [
        {
          name : 'input',
          placeholder : 'Min 50 Words'
        }
      ],
      buttons : [
        {
          text : 'Cancel',
          role : 'cancel'
        },
        {
          text : 'Submit',
          role : 'submit',
          handler : () =>{
            this.navCtrl.setRoot(HomePage).then(()=>{
              let index = this.navCtrl.length()-2;
              this.navCtrl.remove(index);
            });
          }
        }
      ]
    });
    alert.present();
  }

}
