import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeInstitutePage } from '../home-institute/home-institute';

@IonicPage()
@Component({
  selector: 'page-institute-second-form',
  templateUrl: 'institute-second-form.html',
})
export class InstituteSecondFormPage {

  // @ViewChild('myInput') myInput: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstituteSecondFormPage');
  }

  // resize() {
  //   var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
  //   var scrollHeight = element.scrollHeight;
  //   element.style.height = scrollHeight + 'px';
  //   this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  // }

  gotoHome(){
    this.navCtrl.setRoot(HomeInstitutePage).then(()=>{
      let index = this.navCtrl.length()-2;
      this.navCtrl.remove(index);
    });
  }

}
