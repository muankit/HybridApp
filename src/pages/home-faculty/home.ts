import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController , Content} from 'ionic-angular';
import { JobClickPage } from '../job-click/job-click';
import { ResumeOverviewPage } from '../resume-overview/resume-overview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild("horiScrollContent") content : Content;

  constructor(public navCtrl: NavController , public toastCtrl : ToastController) {

  }
  jobClick(){
    this.navCtrl.push(JobClickPage);
  }
  applyBtnClick(){
    this.navCtrl.push(ResumeOverviewPage);
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

  scrollTopixels(){
    this.content.scrollTo(0,200,100);
  }

}
