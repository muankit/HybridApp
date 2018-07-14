import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slide } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home-faculty/home';
import { LoginPage } from '../pages/login/login';
import { SliderPage } from '../pages/slider/slider';
import { FacultyFormPage } from '../pages/faculty-form/faculty-form';
import { InstituteFirstFormPage } from '../pages/institute-first-form/institute-first-form';
import { InstituteSecondFormPage } from '../pages/institute-second-form/institute-second-form';
import { EntrySlidesPage } from '../pages/entry-slides/entry-slides';
import { HomeInstitutePage } from '../pages/home-institute/home-institute';
import { JobClickPage } from '../pages/job-click/job-click';
import { ResumeOverviewPage } from '../pages/resume-overview/resume-overview';
import { FacultyClickPage } from '../pages/faculty-click/faculty-click';
import { CallNumber } from '../../node_modules/@ionic-native/call-number';
import { FacultyDashboardPage } from '../pages/faculty-dashboard/faculty-dashboard';
import { InstituteDashboardPage } from '../pages/institute-dashboard/institute-dashboard';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SliderPage,
    FacultyFormPage,
    InstituteFirstFormPage,
    InstituteSecondFormPage,
    EntrySlidesPage,
    HomeInstitutePage,
    JobClickPage,
    ResumeOverviewPage,
    FacultyClickPage,
    FacultyDashboardPage,
    InstituteDashboardPage
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
    FacultyFormPage,
    InstituteFirstFormPage,
    InstituteSecondFormPage,
    EntrySlidesPage,
    HomeInstitutePage,
    JobClickPage,
    ResumeOverviewPage,
    FacultyClickPage,
    FacultyDashboardPage,
    InstituteDashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
