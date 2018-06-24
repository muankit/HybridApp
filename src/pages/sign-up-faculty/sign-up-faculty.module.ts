import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpFacultyPage } from './sign-up-faculty';

@NgModule({
  declarations: [
    SignUpFacultyPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpFacultyPage),
  ],
})
export class SignUpFacultyPageModule {}
