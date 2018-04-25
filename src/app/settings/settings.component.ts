import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser} from '../CurrentUser';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private visible;
  private anon;

  constructor(private user: CurrentUser, private router: Router, private contactServ: ContactsService) {
    this.visible = this.user.visible;
    this.anon = !this.user.appear;
  }

  ngOnInit() {
    if (this.user.key == undefined) {
      this.router.navigate(['/']);
    }
  }

  visibleChange(ev) {
    console.log(ev);
    this.contactServ.setVisible({'visible': ev, 'user': { 'username': this.user.username, 'password': this.user.password }}).subscribe(res=>{
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  anonChange(ev) {
    console.log(ev);
    this.user.appear = !ev;
  }
}
