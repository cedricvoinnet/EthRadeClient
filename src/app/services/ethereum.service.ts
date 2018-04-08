import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

declare let window: any;

@Injectable()
export class EthereumService {

  private _web3: any;
  private _balance: any;
  private _wallet: any;
  private _address: any;
  private _password: any;
  private _account: any;

  constructor(password : String) {
    this._web3 = new Web3('http://192.168.0.26:8545');
    //this._web3 = new Web3.providers.WebsocketProvider("ws://192.168.0.26:8545"));
    console.log(this._web3)
  } 

  createAccount() {
    this._account = this._web3.eth.accounts.create();
    console.log(this._account);
    this._address = this._account.address;
    console.log(this._address);
  }


  loadAccount(_password) {
    try {
        var l = this._web3.eth.accounts.wallet.load(_password);
        console.log("Account Unlocked")
        return l;
    } catch (e) {
        console.log(e);
    }
  }

  createWallet() {
    this.createAccount();
    //this._web3.eth.accounts.wallet.create()
    this._web3.eth.accounts.wallet.add(this._account);
    console.log(this._web3.eth.accounts.wallet)
    //this._web3.eth.accounts.wallet.save(this._password);
  }

  loadWallet() {
    this._web3.eth.accounts.wallet.load(this._password, 'web3js_wallet')
  }

  sendEth(_from, _to, _amount) {
    this._web3.eth.sendTransaction({
        from: _from,
        to: _to,
        value: this._web3.utils.toWei(_amount, 'ether'),
        gas: '0x2710'
    }).then(function(receipt) {
        console.log(receipt);
    });
  }

  getBalance(address) {
    return this._web3.eth.getBalance(address)
    .then(function(receipt) {
      return receipt;
    });
  }


  getAddress() {
    return this._address;
  }
}