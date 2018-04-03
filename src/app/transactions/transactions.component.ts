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

  private newContact = {
    surname: ""
  };

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
  }

  sendEth() {
    if (this.transaction.to && this.transaction.amount) {
      console.log("send transac to BC");

      if (this.transaction.addToContact) {
        console.log("send contact to server");
        this.contactService
          .addContact({
            user: this.user,
            new_contact: {
              surname: this.newContact.surname
                ? this.newContact.surname
                : this.transaction.to,
              key: this.transaction.to
            }
          })
          .subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log(err);
            }
          );
      }
    }
  }
}
