import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrySlidesPage } from './entry-slides';

@NgModule({
  declarations: [
    EntrySlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(EntrySlidesPage),
  ],
})
export class EntrySlidesPageModule {}
