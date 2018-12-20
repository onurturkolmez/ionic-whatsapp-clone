import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  Platform
} from "ionic-angular";
import { HomePage } from "../home/home";
import { StatusBar } from "@ionic-native/status-bar";

@IonicPage()
@Component({
  selector: "page-show-status",
  templateUrl: "show-status.html"
})
export class ShowStatusPage {
  status: any;
  id: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public statusBar: StatusBar,
    public platform: Platform
  ) {
    this.status = this.navParams.get("status");
  }

  ionViewDidLoad() {
    
    this.platform.ready().then(() => {
      this.statusBar.hide();
    });

    var that = this;
    var width = 0;
    var elem = document.getElementById("myBar");
    this.id = setInterval(loadProgress, 50);

    function loadProgress() {
      if (width >= 100) {
        clearInterval(this.id);
        that.app.goBack();
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
    console.log("ionViewDidLoad ShowStatusPage");
  }

  ionViewWillLeave() {
    clearInterval(this.id);
  }
}
