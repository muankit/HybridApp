import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacultyClickPage } from '../faculty-click/faculty-click';

@IonicPage()
@Component({
  selector: 'page-home-institute',
  templateUrl: 'home-institute.html',
})
export class HomeInstitutePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeInstitutePage');
  }

  facultyClick(){
    this.navCtrl.push(FacultyClickPage);
  }

}
