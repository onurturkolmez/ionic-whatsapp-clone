import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoChatPage } from './do-chat';

@NgModule({
  declarations: [
    DoChatPage,
  ],
  imports: [
    IonicPageModule.forChild(DoChatPage),
  ],
})
export class DoChatPageModule {}
