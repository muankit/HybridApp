import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slide } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SliderPage } from '../pages/slider/slider';
import { TabsPage } from '../pages/tabs/tabs';
import { FacultyFormPage } from '../pages/faculty-form/faculty-form';
import { InstituteFirstFormPage } from '../pages/institute-first-form/institute-first-form';
import { InstituteSecondFormPage } from '../pages/institute-second-form/institute-second-form';
import { EntrySlidesPage } from '../pages/entry-slides/entry-slides';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SliderPage,
    TabsPage,
    FacultyFormPage,
    InstituteFirstFormPage,
    InstituteSecondFormPage,
    EntrySlidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , {
        scrollPadding: false,
        scrollAssist: true,
        autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SliderPage,
    TabsPage,
    FacultyFormPage,
    InstituteFirstFormPage,
    InstituteSecondFormPage,
    EntrySlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
