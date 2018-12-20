import { Component } from "@angular/core";

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  template: `
  <ion-tabs>
    <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
    <ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger"></ion-tab>
    <ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>
  </ion-tabs>
  `,
  selector: "tabs",
  templateUrl: "tabs.html"
})
export class TabsComponent {
  text: string;

  constructor() {
    console.log("Hello TabsComponent Component");
    this.text = "Hello World";
  }
}
