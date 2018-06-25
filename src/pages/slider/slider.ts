import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacultyFormPage } from '../faculty-form/faculty-form';
import { InstituteFirstFormPage } from '../institute-first-form/institute-first-form';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  goToForm(){
    if((this.navParams.get('title')) === 'faculty'){
      this.navCtrl.push(FacultyFormPage);
    }
    else{
      this.navCtrl.push(InstituteFirstFormPage);
    }
  }

}
