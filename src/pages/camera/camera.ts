import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Gesture, Events, App, Navbar } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";

@IonicPage()
@Component({
  selector: "page-camera",
  templateUrl: "camera.html"
})
export class CameraPage {
  @ViewChild(Navbar) navBar: Navbar;
  public base64Image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private events:Events
  ) {
    this.events.subscribe("loadCamera",() => {
      this.loadCamera();
    });
  }

  ionViewDidLoad(){
    this.navBar.backButtonClick = (e:UIEvent) => {
      this.navCtrl.parent.superTabs.slideTo(1);
    };
  }

  loadCamera() {
    console.log("ionViewDidLoad CameraPage");
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
