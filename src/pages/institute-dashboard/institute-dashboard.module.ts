import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstituteDashboardPage } from './institute-dashboard';

@NgModule({
  declarations: [
    InstituteDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(InstituteDashboardPage),
  ],
})
export class InstituteDashboardPageModule {}
