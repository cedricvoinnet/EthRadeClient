import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '../CurrentUser';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
  ];

  constructor(private user: CurrentUser, private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
    if (this.user.key == undefined) {
      this.router.navigate(['/']);
    }
    this.getUsers();
  }

  getUsers() {
    this.contactsService.getUsers({ user: { 'username': this.user.username, 'password': this.user.password } }).subscribe(res => {
      console.log(JSON.parse(res));
      this.contacts = JSON.parse(res);
    },
      err => {
        console.log(err);
      })
  }

  addContact(contact) {
    this.contactsService.addContact({ user: { 'username': this.user.username, 'password': this.user.password }, new_contact: contact }).subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err);
      })
    console.log(contact);
  }
}
