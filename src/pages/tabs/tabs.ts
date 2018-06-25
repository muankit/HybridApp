import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpFacultyPage } from '../sign-up-faculty/sign-up-faculty';
import { SignUpInstitutePage } from '../sign-up-institute/sign-up-institute';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  facultyPage = SignUpFacultyPage;
  institutePage = SignUpInstitutePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  backToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
