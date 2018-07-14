import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home-faculty/home';
import { ResumeOverviewPage } from '../resume-overview/resume-overview';

@IonicPage()
@Component({
  selector: 'page-job-click',
  templateUrl: 'job-click.html',
})
export class JobClickPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobClickPage');
  }

  favouriteClick(){
    let toast = this.toastCtrl.create({
      message: 'Added to Favourite',
      duration: 1000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  applyBtnClick(){
    this.navCtrl.push(ResumeOverviewPage).then(()=>{
      let index = this.navCtrl.length()-2;
      this.navCtrl.remove(index);   
    });
  }

}
