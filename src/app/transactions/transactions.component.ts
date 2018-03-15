import { Component, OnInit } from '@angular/core';
import { CurrentLoggedKey} from '../CurrentLoggedKey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private key: CurrentLoggedKey, private router: Router) { }

  ngOnInit() {
    if (!this.key.key){
      this.router.navigate(['/login']);
    }
  }

  sendEth() {

  }
}
