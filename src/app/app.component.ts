import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AskPage } from '../pages/ask/ask';
import { SignUpFacultyPage } from '../pages/sign-up-faculty/sign-up-faculty';
import { SignUpInstitutePage } from '../pages/sign-up-institute/sign-up-institute';
import { SliderPage } from '../pages/slider/slider';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SliderPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

