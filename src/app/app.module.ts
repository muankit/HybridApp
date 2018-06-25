import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slide } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpFacultyPage } from '../pages/sign-up-faculty/sign-up-faculty';
import { SignUpInstitutePage } from '../pages/sign-up-institute/sign-up-institute';
import { SliderPage } from '../pages/slider/slider';
import { TabsPage } from '../pages/tabs/tabs';
import { FacultyFormPage } from '../pages/faculty-form/faculty-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpFacultyPage,
    SignUpInstitutePage,
    SliderPage,
    TabsPage,
    FacultyFormPage
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
    SignUpFacultyPage,
    SignUpInstitutePage,
    SliderPage,
    TabsPage,
    FacultyFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
