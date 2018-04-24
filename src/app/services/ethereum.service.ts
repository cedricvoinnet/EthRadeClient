import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as keythereum from 'keythereum';
import * as streamSaver from 'StreamSaver';

declare let window: any;


@Injectable()
export class EthereumService {

  private _web3: any;
  private _balance: any;
  private _password: any;
  private _account: any;

  constructor() {
    let Web3F : any = Web3;
    this._web3 = new Web3F('http://192.168.0.26:8545');
    //this._web3.providers.WebsocketProvider("wss://192.168.0.16:8545")
    //this._web3 = new Web3.providers.WebsocketProvider("ws://192.168.0.26:8545"));
    console.log(this._web3);
  }

  setPassword(password) {
    this._password = password;
  }

  newAccount() {
    //return this._web3.eth.accounts.create();
    return this._web3.eth.personal.newAccount(this._password).then(function(receipt) {
      console.log("Newaccount");
      console.log(receipt);
      console.log("end - Newaccount");
      return receipt;
    });
  }

  lockAccount() {
    this._web3.eth.personal.lockAccount(this._account, this._password).then(function(receipt) {
      console.log("lockAccount");
      console.log(receipt);
      console.log("end lockAccount");
      return receipt;
    });
  }

  async unlockAccount() {
     return await this._web3.eth.personal.unlockAccount(this._account, this._password).then(function(receipt) {
      console.log("UnlockAccount");
      console.log(receipt);
      console.log("end UnlockAccount");
      return receipt;
    });
  }

  writeFile() {
    const fileStream = streamSaver.createWriteStream('account.json', this._account.length);
    const writer = fileStream.getWriter();
    var uint8array = new TextEncoder("utf-8").encode(this._account);
    writer.write(uint8array);
    writer.close();
  }

  sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
  }

  async createWallet() {
    console.log(this._password);
    this._account = await this.newAccount();
    console.log(this._account);
    //this.lockAccount('test');
    this.writeFile();
    await this.unlockAccount();
    //this.readInFile('/Users/aureliengiudici/Downloads/account.json');
  }

  async getWallet(file) {
    this._account = file;
  }

  async send(_to, _amount) {
    await this.unlockAccount();
    await this.sendEth(this._account, _to, _amount.toString());
    this.unlockAccount();
  }

  sendEth(_from, _to, _amount) {
    this._web3.eth.sendTransaction({
        from: _from,
        to: _to,
        value: this._web3.utils.toWei(_amount, 'ether'),
        gas: 2000000,
        gasPrice: 2000000,
    }).then(function(receipt) {
        console.log(receipt);
    });
  }

  getBalance() {
    return this._web3.eth.getBalance(this._account)
    .then(function(receipt) {
      return receipt;
    });
  }


  getAddress() {
    return this._account;
  }
}
