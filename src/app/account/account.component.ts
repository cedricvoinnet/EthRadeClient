import { Component, OnInit } from '@angular/core';
import { EthereumService } from '../services/ethereum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  passwordImport = '';
  passwordCreate = '';
  file = '';
  create = false;
  import = false;

  constructor(private service: EthereumService, private router : Router) { 

  }

  ngOnInit() {
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsText(file);
      reader.onload = () => {
        console.log(reader.result);
        this.file = reader.result;
        this.importPassword();
      }
    }
  }

  createPassword() {
    this.create = true;
  }

  importPassword() {
    this.import = true;
  }

  async createAccount() {
    console.log(this.passwordCreate);
    this.service.setPassword(this.passwordCreate);
    await this.service.createWallet();
    this.router.navigate(['wallet']);
  }

  async importAccount() {
    console.log(this.passwordImport);
    this.service.setPassword(this.passwordImport);
    await this.service.getWallet(this.file);
    this.router.navigate(['wallet']);
  }
}
