import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SATINFO } from './satellite-info';
import { CORRECT_PIN } from './constants/constants';
import set = Reflect.set;

const EventSource: any = window['EventSource'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private changeDetector: ChangeDetectorRef, private modalService: NgbModal) { }

  private EVENT_URL = 'http://localhost:8080/stream';
  private message: Array<any> = [];
  private ws;

  title = 'Satellite Monitor';
  satInfo = SATINFO;
  closeResult: string;

  private correctPin = CORRECT_PIN;

  satBox = [
    false, false, false, false
  ];

  onSelect(satId): void {
    this.satBox[satId] = !this.satBox[satId];
  }

  submitPin(pin, satellite): void {
    const index = satellite - 1;
    if (Number(pin) === this.correctPin[index]) {
      this.satInfo[index].status = 'OK';
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
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
          const sat = this.satInfo.find(x => x.id === item.id);
          sat.status = item.state;
          if (sat.status === 'OK') {
            sat.lastConnect = new Date().toISOString();
          }
        });
      }
      this.message = ['No Data'];
      // manually detect changes
      this.changeDetector.detectChanges();
    };

  }

  logServerMessage(data) {
    console.log('message from server :', data);
  }
}
