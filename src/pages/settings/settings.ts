import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  list: any = [
    { text: "Account", icon: "key" },
    { text: "Chats", icon: "text" },
    { text: "Notifications", icon: "notifications" },
    { text: "Data Usage", icon: "sync" },
    { text: "Contacts", icon: "contacts" },
    { text: "Help", icon: "help-circle" },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }
}
