import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EthereumService } from "../services/ethereum.service";
import { CurrentUser } from "../CurrentUser";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.css"]
})
export class WalletComponent implements OnInit {
  constructor(
    private key: CurrentUser,
    private router: Router,
    private ethereumService: EthereumService
  ) {}

  ngOnInit() {
    console.log("enter wallet");
    console.log(this.key);
    if (!this.key.key) {
      this.router.navigate(["/login"]);
    }
  }
}
