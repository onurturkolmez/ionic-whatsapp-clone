import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Gesture,
  App
} from "ionic-angular";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  ConnectionBackend
} from "@angular/http";
import { ShowStatusPage } from "../show-status/show-status";
import { Camera } from "@ionic-native/camera";
@IonicPage()
@Component({
  selector: "page-status",
  templateUrl: "status.html"
})
export class StatusPage {
  statusData: Array<any>;
  public base64Image: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public app: App,
    private camera: Camera
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad StatusPage");

    this.http.get("https://randomuser.me/api/?results=5").subscribe(data => {
      this.statusData = data.json().results;
      console.log("userdata", this.statusData);

      // this.statusData.forEach(el => {
      //   el["viewed"] = false;
      // });
      
    });
  }

  showStatus(status: any) {
    // status["viewed"] = true;
    this.app.getRootNav().push(ShowStatusPage, { status: status });
    // this.navCtrl.setRoot(ShowStatusPage,{status:status});
    // this.navCtrl.push(ShowStatusPage, { status: status });
  }

  openCamera() {
    this.camera
      .getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
      })
      .then(
        imageData => {
          // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
        },
        err => {
          console.log(err);
        }
      );
  }
}
