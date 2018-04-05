import { Component } from '@angular/core';
import { SATINFO} from './satellite-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Satellite Monitor';
  satInfo = SATINFO;
}
