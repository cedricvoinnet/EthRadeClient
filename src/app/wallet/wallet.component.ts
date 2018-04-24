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
    private user: CurrentUser,
    private router: Router,
    private ethereumService: EthereumService
  ) {}

  async ngOnInit() {
     this.ethereumService.createWallet();
    let test = await this.ethereumService.getBalance("0xaFB7df1dEd98bfc03161feec09AC56Ab8eaB3E61");
    console.log(test);
    if (!this.user.key) {
   //   this.router.navigate(["/login"]);
    }
  }
}
