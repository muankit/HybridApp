import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumeOverviewPage } from './resume-overview';

@NgModule({
  declarations: [
    ResumeOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumeOverviewPage),
  ],
})
export class ResumeOverviewPageModule {}
