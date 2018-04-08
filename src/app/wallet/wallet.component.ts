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
  private ethereumService: EthereumService;

  constructor(
    private key: CurrentUser,
    private router: Router,
  ) {}

  async ngOnInit() {
    this.ethereumService = new EthereumService("test");
    this.ethereumService.createWallet();
    let test = await this.ethereumService.getBalance("0xaFB7df1dEd98bfc03161feec09AC56Ab8eaB3E61");
    console.log(test);
    if (!this.key.key) {
   //   this.router.navigate(["/login"]);
    }
  }
}
