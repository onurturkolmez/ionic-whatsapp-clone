import { Component, HostListener, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SingletonService } from "../../app/SingletonService";
import { Observable } from 'rxjs/Observable';
import { MomentPipe } from "../../pipes/moment/moment";

@IonicPage()
@Component({
  selector: "page-do-chat",
  templateUrl: "do-chat.html"
})
export class DoChatPage {
  message: string = "";
  date: any;
  conversation: any;
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public singleton: SingletonService
  ) {
    this.user = this.navParams.get("user");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DoChatPage");
    this.date = new Date();

    this.conversation = document.querySelector('.conversation-container');

    var memes = [
      'Dude, you smashed my turtle saying "I\'M MARIO BROS!"',
      'Dude, you grabed seven oranges and yelled "I GOT THE DRAGON BALLS!"',
      'Dude, you threw my hamster across the room and said "PIKACHU I CHOOSE YOU!"',
      'Dude, you congratulated a potato for getting a part in Toy Story',
      'Dude, you were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!"',
      'Dude, you were cutting all my pinapples yelling "SPONGEBOB! I KNOW YOU\'RE THERE!"',
    ];

    var random = document.querySelector('#random');
    random.innerHTML = memes[Math.floor(Math.random() * memes.length)];
  }

  sendMessage() {
    var text = this.buildMessage(this.message, "sent");
    this.conversation.appendChild(text);
    this.message = "";
    this.animateMessage(text);

    //text capitalize
    var reply = this.buildMessage("Hello " + this.user.name.first.replace(/\b\w/g, l => l.toUpperCase()), "received");

    var uStatus = document.getElementById("UserStatus");
    uStatus.innerHTML = "Typing...";
    setTimeout(() => {
      uStatus.innerHTML = "Online";
      this.conversation.appendChild(reply);
    }, 5000);

  }

  buildMessage(text, type) {
    let date_ = new Date();
    var element = document.createElement('div');

    element.classList.add('message', type);

    var innerText = text +
      '<span class="metadata">' +
      '<span class="time">' + new MomentPipe().transform(date_, "h:mm A") + '</span>';

    if (type === "sent") {
      innerText += '<span class="tick tick-animation">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
        '</span>';
    }

    innerText += '</span>';

    element.innerHTML = innerText;

    return element;
  }

  animateMessage(message) {
    setTimeout(() => {
      var tick = message.querySelector('.tick');
      tick.classList.remove('tick-animation');
    }, 500);
  }

}
