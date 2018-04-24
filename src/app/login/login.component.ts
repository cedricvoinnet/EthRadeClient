import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { CurrentUser } from "../CurrentUser";
import { ConnectionService } from "../services/connection.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private model = {
    username: "",
    password: ""
  };
  private closeResult: string;

  constructor(
    private connection: ConnectionService,
    private user: CurrentUser,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
  }

  open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  login(content) {
   this.connection.login(this.model).subscribe(
      res => {
        this.user.username = this.model.username;
        this.user.password = this.model.password;
        console.log(this.user);
        this.router.navigate(["/wallet"]);
      },
      err => {
        console.log(err);
        this.open(content);
      }
    );
  }
}
