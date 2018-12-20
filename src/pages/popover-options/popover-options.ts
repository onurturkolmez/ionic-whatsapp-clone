import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  App
} from "ionic-angular";
import { SettingsPage } from "../settings/settings";

@Component({
  selector: "page-popover-options",
  templateUrl: "popover-options.html"
})
export class PopoverOptionsPage {
  tab: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public app: App
  ) {
    this.tab = this.navParams.data.type;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopoverOptionsPage");
  }

  go() {
    this.viewCtrl.dismiss().then(() => {
      this.app.getRootNav().push(SettingsPage);
    });
  }
}
