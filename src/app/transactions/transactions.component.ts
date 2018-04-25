import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CurrentUser } from "../CurrentUser";
import { ContactsService } from "../services/contacts.service";
import { ConnectionService } from "../services/connection.service";
import { EthereumService } from "../services/ethereum.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"]
})
export class TransactionsComponent implements OnInit {
  private transaction = {
    amount: 0,
    to: "",
    addToContact: false
  };

  contacts = [
  ];

  constructor(
    private user: CurrentUser,
    private router: Router,
    private contactService: ContactsService,
    private connectionService: ConnectionService,
    private ethereumService: EthereumService
  ) { }

  ngOnInit() {
    if (this.user.key == undefined) {
      this.router.navigate(['/']);
    }
    this.getContacts();
  }

  sendEth() {
    if (this.transaction.to && this.transaction.amount) {
      console.log("send transac to BC");
      this.ethereumService.send(this.transaction.to, this.transaction.amount);
      if (this.user.appear) {
        this.connectionService.sendTransaction({
          'user': { 'username': this.user.username, 'password': this.user.password },
          'from': this.user.key, 'to': this.transaction.to, 'amount': this.transaction.amount
        })
      }
    }
  }

  getContacts() {
    this.contactService.getContact({ user: { 'username': this.user.username, 'password': this.user.password } }).subscribe(res => {
      console.log(JSON.parse(res));
      this.contacts = JSON.parse(res);
    },
      err => {
        console.log(err);
      })
  }

  changeKey(contact) {
    this.transaction.to = contact.key;
  }
}
