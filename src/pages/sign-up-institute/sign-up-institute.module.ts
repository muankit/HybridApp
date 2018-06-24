import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpInstitutePage } from './sign-up-institute';

@NgModule({
  declarations: [
    SignUpInstitutePage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpInstitutePage),
  ],
})
export class SignUpInstitutePageModule {}
