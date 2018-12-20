import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallPage } from './call';

@NgModule({
  declarations: [
    CallPage,
  ],
  imports: [
    IonicPageModule.forChild(CallPage),
  ],
})
export class CallPageModule {}
