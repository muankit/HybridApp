import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultyFormPage } from './faculty-form';

@NgModule({
  declarations: [
    FacultyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FacultyFormPage),
  ],
})
export class FacultyFormPageModule {}
