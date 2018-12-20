import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverUserPage } from './popover-user';

@NgModule({
  declarations: [
    PopoverUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverUserPage),
  ],
})
export class PopoverUserPageModule {}
