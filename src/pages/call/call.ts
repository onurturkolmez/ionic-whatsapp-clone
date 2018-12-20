import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Gesture, PopoverController } from "ionic-angular";
import { Http } from "@angular/http";
import { PopoverUserPage } from "../popover-user/popover-user";
@IonicPage()
@Component({
  selector: "page-call",
  templateUrl: "call.html"
})
export class CallPage {
  callData: Array<any>;
  popover: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public popoverCtrl:PopoverController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CallPage");

    this.http.get("https://randomuser.me/api/?results=10").subscribe(data => {
      this.callData = data.json().results;
      this.callData.forEach(element => {
        let rand: number = Math.floor(Math.random() * 6) + 1;
        if (rand % 5 == 0) {
          element.iconClass = "fa-rotate-135";
          element.iconColor = "danger";
          element.iconName = "arrow-round-up";
          element.type= "videocam";
        } else {
          element.iconClass = "fa-rotate-45";
          element.iconColor = "firstLevelGreen";
          element.iconName = "arrow-round-up";
          element.type= "call";
        }
      });
      console.log("calldata",this.callData);
    });
  }

  show(ev, user) {
    this.popover = this.popoverCtrl.create(
      PopoverUserPage,
      {user:user},
      { cssClass: "transparent" }
    );

    let ev_ = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: '130'
          };
        }
      }
    };
    
    this.popover.present({ ev: ev_ });
  }
}
