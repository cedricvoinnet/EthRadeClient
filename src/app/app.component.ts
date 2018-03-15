import { Component } from '@angular/core';
import { CurrentLoggedKey } from './CurrentLoggedKey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Eth'Rade";

  constructor(private key: CurrentLoggedKey){}
}
