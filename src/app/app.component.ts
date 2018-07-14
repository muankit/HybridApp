import { Component , ViewChild} from '@angular/core';
import { Platform , App, Slide , NavController, MenuController, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { FacultyDashboardPage } from '../pages/faculty-dashboard/faculty-dashboard';
import { InstituteDashboardPage } from '../pages/institute-dashboard/institute-dashboard';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  homePage = LoginPage;
  facultyDashboard = FacultyDashboardPage;
  instituteDashboard = InstituteDashboardPage;
  public alertShown:boolean = false;


  @ViewChild('nav') nav : NavController;

  constructor(platform: Platform, statusBar: StatusBar, 
              public alertCtrl : AlertController ,
              splashScreen: SplashScreen , 
              public menuCtrl : MenuController,) {
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

