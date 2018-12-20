import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController,
  Gesture,
  Tabs,
  App
} from "ionic-angular";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  ConnectionBackend
} from "@angular/http";
import { PopoverUserPage } from "../popover-user/popover-user";
import { SingletonService } from "../../app/SingletonService";
import { DoChatPage } from "../do-chat/do-chat";
@IonicPage()
@Component({
  selector: "page-chat",
  templateUrl: "chat.html"
})
export class ChatPage {
  contactData: Array<any>;
  popover: any;
  imageUrl;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public app:App,
    public popoverCtrl: PopoverController,
    public singleton: SingletonService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ChatPage");

    this.http.get("https://randomuser.me/api/?results=20").subscribe(data => {
      this.contactData = data.json().results;
      console.log("userdata", this.contactData);
    });
  }

  goChat(contact) {
    this.app.getRootNav().push(DoChatPage,{user:contact});
  }

  show(ev:Event, user) {
    ev.stopPropagation();
    this.popover = this.popoverCtrl.create(
      PopoverUserPage,
      { user: user },
      { cssClass: "transparent" }
    );

    let ev_ = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: "130"
          };
        }
      }
    };

    this.popover.present({ ev: ev_ });
  }
}
