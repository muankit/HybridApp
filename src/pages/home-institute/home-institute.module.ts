import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeInstitutePage } from './home-institute';

@NgModule({
  declarations: [
    HomeInstitutePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeInstitutePage),
  ],
})
export class HomeInstitutePageModule {}
