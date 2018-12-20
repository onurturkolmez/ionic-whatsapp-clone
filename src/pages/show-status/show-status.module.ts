import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowStatusPage } from './show-status';

@NgModule({
  declarations: [
    ShowStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowStatusPage),
  ],
})
export class ShowStatusPageModule {}
