import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser} from '../CurrentUser';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
  ];

  constructor(private key: CurrentUser, private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
    if (!this.key.key){
      this.router.navigate(['/login']);
    }
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContact({user: {'username': this.key.username, 'password': this.key.password}}).subscribe(res => {
      console.log(JSON.parse(res));
      this.contacts = JSON.parse(res);
    },
    err => {
      console.log(err);

    })
  }
}
