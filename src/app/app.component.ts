import { Component } from '@angular/core';
import { SATINFO} from './satellite-info';
import {Satellite} from "./satellite";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Satellite Monitor';
  satInfo = SATINFO;

  satBox = [
   false,false,false,false
  ];

  onSelect(satId): void {
    this.satBox[satId] = !this.satBox[satId];
  }
}
