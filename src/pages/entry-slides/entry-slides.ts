import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Slides} from 'ionic-angular';
import { InstituteFirstFormPage } from '../institute-first-form/institute-first-form';
import { FacultyFormPage } from '../faculty-form/faculty-form';
import { LoginPage } from '../login/login';
import { SliderPage } from '../slider/slider';


@IonicPage()
@Component({
  selector: 'page-entry-slides',
  templateUrl: 'entry-slides.html',
})
export class EntrySlidesPage {

  addClass : boolean = true;
  add2Class : boolean = false;

  paramObj= {title : 'faculty'};

  @ViewChild(Slides) slides: Slides;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //button changing indexes
  facultyClick(index){
    this.slides.slideTo(index);
    this.add2Class = false;
    this.addClass=true;
  }

  instituteClick(index){
    this.slides.slideTo(index);
    this.addClass =false;
    this.add2Class =true;
  }
  //ends here

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrySlidesPage');
  }
  // goToInstituteForm(){
  //   this.navCtrl.push(InstituteFirstFormPage);
  // }
  // goToFacultyForm(){
  //   this.navCtrl.push(FacultyFormPage);
  // }
  goToFacultySlider(){
    this.navCtrl.push(SliderPage , this.paramObj);
  }
  goToInstituteSlider(){
    this.navCtrl.push(SliderPage , 'institute');
  }

  backToLogin(){
    this.navCtrl.push(LoginPage);
  }

  slideChanged(){
    if(this.slides.getActiveIndex()==0){
      this.addClass=true;
      this.add2Class = false;
    }else if(this.slides.getActiveIndex()==1){
      this.add2Class = true;
      this.addClass = false;
    }
  }
}
