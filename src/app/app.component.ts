import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { SATINFO} from './satellite-info';
import {Satellite} from "./satellite";
import set = Reflect.set;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  constructor (private changeDetector: ChangeDetectorRef) {}

  private EVENT_URL = 'http://localhost:8080/stream';
  private message: string = '0';

  title = 'Satellite Monitor';
  satInfo = SATINFO;

  satBox = [
   false,false,false,false
  ];

  onSelect(satId): void {
    this.satBox[satId] = !this.satBox[satId];
  }

  ngOnInit() {
    // creates event object
    this.ws = new EventSource(this.EVENT_URL, { withCredentials: true });

    // listing to server messages
    this.ws.onmessage = (evt) => {
      this.logServerMessage(evt.data);

      // update the model
      this.message = Array.from(JSON.parse(evt.data));
      //console.log(this.message);
      this.message.forEach(item => {
        console.log(item);
        let sat = this.satInfo.find(x => x.id == item.id);
        //console.log(sat);
        sat.status = item.state;
        if (sat.status === 'OK') {
          sat.lastConnect = new Date().toISOString();
        }
        //this.satInfo[item.id].status = item.state;
        //console.log(this.satInfo);
      });

      // manually detect changes
      this.changeDetector.detectChanges();
    };
  }

  logServerMessage (data) {
    console.log("message from server :",data);
  }
}
