import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AskPage } from '../pages/ask/ask';
import { SignUpFacultyPage } from '../pages/sign-up-faculty/sign-up-faculty';
import { SignUpInstitutePage } from '../pages/sign-up-institute/sign-up-institute';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AskPage,
    SignUpFacultyPage,
    SignUpInstitutePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AskPage,
    SignUpFacultyPage,
    SignUpInstitutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
