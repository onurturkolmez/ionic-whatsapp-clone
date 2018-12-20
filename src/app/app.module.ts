import { Camera } from '@ionic-native/camera';
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { CallPage } from "../pages/call/call";
import { StatusPage } from "../pages/status/status";
import { ChatPage } from "../pages/chat/chat";
import { PopoverOptionsPage } from "../pages/popover-options/popover-options";
import { IonTextAvatar } from "ionic-text-avatar";
import { HttpModule } from "@angular/http";
import { TimeFormatPipe } from "../pipes/time-format/time-format";
import { PopoverUserPage } from "../pages/popover-user/popover-user";
import { SuperTabsModule } from 'ionic2-super-tabs';
import { CameraPage } from "../pages/camera/camera";
import { ProfilePage } from "../pages/profile/profile";
import { HomePage } from '../pages/home/home';
import { ShowStatusPage } from '../pages/show-status/show-status';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { SettingsPage } from '../pages/settings/settings';
import { SingletonService } from './SingletonService';
import { DoChatPage } from '../pages/do-chat/do-chat';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { MomentPipe } from '../pipes/moment/moment';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IonTextAvatar,
    PopoverOptionsPage,
    PopoverUserPage,
    CallPage,
    StatusPage,
    ChatPage,
    CameraPage,
    ProfilePage,
    ShowStatusPage,
    UserProfilePage,
    SettingsPage,
    DoChatPage,
    TimeFormatPipe,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // IonicImageViewerModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverOptionsPage,
    PopoverUserPage,
    CallPage,
    StatusPage,
    CameraPage,
    ChatPage,
    ShowStatusPage,
    UserProfilePage,
    SettingsPage,
    ProfilePage,
    DoChatPage
  ],
  providers: [
    Camera,
    HttpModule,
    StatusBar,
    SingletonService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
