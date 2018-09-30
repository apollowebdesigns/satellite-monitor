import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SATINFO} from './satellite-info';
import set = Reflect.set;

const EventSource: any = window['EventSource'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  constructor (private changeDetector: ChangeDetectorRef, private modalService: NgbModal) {}

  private EVENT_URL = 'http://localhost:8080/stream';
  private message: Array<any> = [];
  private ws;

  title = 'Satellite Monitor';
  satInfo = SATINFO;
  closeResult: string;

  satBox = [
   false,false,false,false
  ];

  onSelect(satId): void {
    this.satBox[satId] = !this.satBox[satId];
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    //let eventSource = window['EventSource'];
    this.ws = new EventSource(this.EVENT_URL, { withCredentials: true });

    // listing to server messages
    this.ws.onmessage = (evt) => {
      console.log(evt.data);
      if (evt.data !== null) {

        this.logServerMessage(evt.data);
        // update the model
        this.message = Array.from(JSON.parse(evt.data));
        this.message.forEach(item => {
          console.log(item);
          let sat = this.satInfo.find(x => x.id == item.id);
          sat.status = item.state;
          if (sat.status === 'OK') {
            sat.lastConnect = new Date().toISOString();
          }
        });
      }
      this.message = ["No Data"];
      // manually detect changes
      this.changeDetector.detectChanges();
    };

  }

  logServerMessage (data) {
    console.log("message from server :",data);
  }
}
