import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConnectionService } from "../services/connection.service";
import { EthereumService } from "../services/ethereum.service";

import { CurrentUser } from "../CurrentUser";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  private model = {
    username: "",
    password: "",
    key: "",
    confirm: ""
  };

  constructor(
    private connection: ConnectionService,
    private user: CurrentUser,
    private router: Router,
    private ethereum: EthereumService
  ) {}

  ngOnInit() {
    if (this.user.key == undefined) {
      this.router.navigate(['/']);
    }
  }

  register() {
    this.model.key = this.ethereum.getAddress();
    this.connection.register(this.model).subscribe(
      res => {
        console.log(res.token);
        this.model.key = res.token;
        this.user.username = this.model.username;
        this.user.password = this.model.password;
        this.user.key = this.model.key;
        this.router.navigate(["/wallet"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
