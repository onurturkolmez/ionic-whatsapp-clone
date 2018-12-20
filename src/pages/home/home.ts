import { Component, NgModule, ViewChild } from "@angular/core";
import {
  NavController,
  NavParams,
  PopoverController,
  Gesture,
  Tabs,
  IonicPage,
  Tab,
  Events
} from "ionic-angular";
import { ChatPage } from "../chat/chat";
import { StatusPage } from "../status/status";
import { CallPage } from "../call/call";
import { PopoverOptionsPage } from "../popover-options/popover-options";
import { CameraPage } from "../camera/camera";
import { SuperTabs } from "ionic2-super-tabs";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  selectedTab: number;
  chatRoot: any = ChatPage;
  statusRoot: any = StatusPage;
  callRoot: any = CallPage;
  cameraRoot: any = CameraPage;
  popover: any;
  tabFabIcon: string = "text";
  optionType:string = "chat"; 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public events: Events
  ) {}

  showPopover(ev) {
    this.popover = this.popoverCtrl.create(
      PopoverOptionsPage,
      { type: this.optionType },
      { cssClass: "" }
    );
    this.popover.present({ ev: ev });
  }

  onTabSelect($event) {
    this.selectedTab = $event.index;
    switch (this.selectedTab) {
      case 0:
        this.events.publish("loadCamera");
        this.tabFabIcon = "text";
        this.optionType = "chat";
        break;
      case 1:
        this.tabFabIcon = "text";
        this.optionType = "chat";
        break;
      case 2:
        this.tabFabIcon = "camera";
        this.optionType = "status";
        break;
      case 3:
        this.optionType = this.tabFabIcon = "call";
        break;
    }
  }
}
