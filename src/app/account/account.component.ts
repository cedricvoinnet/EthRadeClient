import { Component, OnInit } from '@angular/core';
import { EthereumService } from '../services/ethereum.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  passwordImport = '';
  passwordCreate = '';
  create = false;
  import = false;

  constructor(private service: EthereumService) { }

  ngOnInit() {
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsText(file);
      reader.onload = () => {
        console.log(reader.result);
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

  createAccount() {
    console.log(this.passwordCreate);
    this.service.setPassword(this.passwordCreate);
    this.service.createWallet();
  }

  importAccount() {
    console.log(this.passwordImport);
    this.service.setPassword(this.passwordImport);
    this.service.getWallet();
  }
}
