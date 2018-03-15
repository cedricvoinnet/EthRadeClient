import { Component, OnInit } from '@angular/core';
import { CurrentLoggedKey } from '../CurrentLoggedKey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private key: CurrentLoggedKey, private router: Router) { }

  private model = {
    key: ''
  }

  ngOnInit() {
  }

  login() {
    if (this.model.key) {
      this.key.key = this.model.key;
      this.router.navigate(['/wallet']);
    }
  }
}
