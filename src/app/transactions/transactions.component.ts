import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CurrentUser } from "../CurrentUser";
import { ContactsService } from "../services/contacts.service";
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
    private ethereumService: EthereumService
  ) {}

  ngOnInit() {
    console.log(this.user);

    if (!this.user.key) {
      this.router.navigate(["/login"]);
    }
    this.getContacts();
  }

  sendEth() {
    if (this.transaction.to && this.transaction.amount) {
      console.log("send transac to BC");
      this.ethereumService.send(this.transaction.to, this.transaction.amount)

    }
  }

  getContacts() {
    this.contactService.getContact({user: {'username': this.user.username, 'password': this.user.password}}).subscribe(res => {
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
