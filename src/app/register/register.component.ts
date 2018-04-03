import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConnectionService } from "../services/connection.service";

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
    private key: CurrentUser,
    private router: Router
  ) {}

  ngOnInit() {}

  register() {
    this.connection.register(this.model).subscribe(
      res => {
        console.log(res.token);
        this.model.key = res.token;
        this.key.key = this.model.key;
        this.router.navigate(["/wallet"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
