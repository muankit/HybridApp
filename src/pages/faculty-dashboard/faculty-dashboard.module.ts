import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultyDashboardPage } from './faculty-dashboard';

@NgModule({
  declarations: [
    FacultyDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(FacultyDashboardPage),
  ],
})
export class FacultyDashboardPageModule {}
