import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { ViewController } from "ionic-angular/navigation/view-controller";

/**
 * Generated class for the PopoverUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-popover-user",
  templateUrl: "popover-user.html"
})
export class PopoverUserPage {
  user: any;

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.user = this.navParams.data.user;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopoverUserPage"); 
  }

  goProfile(user: any) {
    this.viewCtrl.dismiss().then(() => {
      this.app.getRootNav().push(ProfilePage, { user: user });
    });
  }
}
