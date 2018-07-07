import { Component , ViewChild} from '@angular/core';
import { Platform , App, Slide , NavController, MenuController, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InstituteFirstFormPage } from '../pages/institute-first-form/institute-first-form';
import { FacultyFormPage } from '../pages/faculty-form/faculty-form';
import { HomeInstitutePage } from '../pages/home-institute/home-institute';
import { HomePage } from '../pages/home/home';
import { InstituteSecondFormPage } from '../pages/institute-second-form/institute-second-form';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  homePage = LoginPage;
  public alertShown:boolean = false;

  @ViewChild('nav') nav : NavController;

  constructor(platform: Platform, statusBar: StatusBar, public alertCtrl : AlertController ,splashScreen: SplashScreen , public menuCtrl : MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page : any){
    this.nav.setRoot(page);
    this.menuCtrl.close();  
  }   
}

