import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Slides } from 'ionic-angular';
import { FacultyFormPage } from '../faculty-form/faculty-form';
import { InstituteFirstFormPage } from '../institute-first-form/institute-first-form';


@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  @ViewChild('slides') slides: Slides;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  //this is skip btn for form
  skipBtn(){
    if((this.navParams.get('title')) === 'faculty'){
      this.navCtrl.push(FacultyFormPage).then(()=>{
        let index = this.navCtrl.length()-2;
        this.navCtrl.remove(index);
      });
    }
    else{
      this.navCtrl.push(InstituteFirstFormPage).then(()=>{
        let index = this.navCtrl.length()-2;
        this.navCtrl.remove(index);
      });
    }
  }

  //arrow function defined here
  goLeft(){
    this.slides.slidePrev();
  }

  goRight(){
    this.slides.slideNext();
  }
}
