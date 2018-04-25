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
  balance = '';

  constructor(
    private user: CurrentUser,
    private router: Router,
    private ethereumService: EthereumService
  ) {}

  async ngOnInit() {
    console.log(this.user.key);
    if (this.user.key == undefined) {
      this.router.navigate(['/']);
    }
    this.user.key = this.ethereumService.getAddress();
    this.balance = await this.ethereumService.getBalance();
  }
}
