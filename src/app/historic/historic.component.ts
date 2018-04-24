import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '../CurrentUser';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  transactions = [];
  constructor(private user: CurrentUser, private router: Router, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.connectionService.getHistory({ user: { 'username': this.user.username, 'password': this.user.password } }).subscribe(res => {
      console.log(JSON.parse(res));
      this.transactions = JSON.parse(res);
    },
      err => {
        console.log(err);
      })
  }
}
