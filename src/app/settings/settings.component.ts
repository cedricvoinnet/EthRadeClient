import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser} from '../CurrentUser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private visible = true;

  constructor(private key: CurrentUser, private router: Router) { }

  ngOnInit() {
    if (!this.key.key){
      this.router.navigate(['/login']);
    }
  }

  onChange(ev) {
    console.log(ev);
  }
}
