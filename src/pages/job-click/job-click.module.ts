import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobClickPage } from './job-click';

@NgModule({
  declarations: [
    JobClickPage,
  ],
  imports: [
    IonicPageModule.forChild(JobClickPage),
  ],
})
export class JobClickPageModule {}
