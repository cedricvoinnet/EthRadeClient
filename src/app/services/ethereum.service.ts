import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as keythereum from 'keythereum';
import * as streamSaver from 'StreamSaver';

declare let window: any;


@Injectable()
export class EthereumService {

  private _web3: any;
  private _balance: any;
  private _address: any;
  private _password: any;
  private _account: any;

  constructor(password : String) {
    let Web3F : any = Web3;
    this._web3 = new Web3F('http://192.168.0.16:8545');
    //this._web3.providers.WebsocketProvider("wss://192.168.0.16:8545")
    //this._web3 = new Web3.providers.WebsocketProvider("ws://192.168.0.26:8545"));
    console.log(this._web3);
  } 

  newAccount() {
    //return this._web3.eth.accounts.create();
    return this._web3.eth.personal.newAccount('test').then(function(receipt) {
      console.log("Newaccount");
      console.log(receipt);
      console.log("end - Newaccount");
      return receipt;
    } 
  }

  lockAccount() {
    this._web3.eth.personal.lockAccount(this._account, 'test').then(function(receipt) {
      console.log("lockAccount");
      console.log(receipt);
      console.log("end lockAccount");
      return receipt;
    }
  }

  async unlockAccount() {
     return await this._web3.eth.personal.unlockAccount(this._account, 'test').then(function(receipt) {
      console.log("UnlockAccount");
      console.log(receipt);
      console.log("end UnlockAccount");
      return receipt;
    }
  }

  readInFile(file : String) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                this._account = rawFile.responseText;
                console.log(this._account);
            }
        }
    }
    rawFile.send(null);
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
    this._account = await this.newAccount();
    console.log(this._account);
    //this.encrypt();
    //await this.decrypt();
    console.log(this._account);
    //this.lockAccount('test');
    this.writeFile();
    await this.unlockAccount('test');
    await this.sleep(20000)
    await this.test();
    //this.readInFile('/Users/aureliengiudici/Downloads/account.json');
  }

  async test() {
    //this.decrypt();
    console.log('account - ');
    console.log(this._account);
    //await this.sleep(60000);
    this.sendEth(this._account, '0xf06c998d943b1cc355cff0d3a0b0719e68d7cfdd', '1');
  }

  async getWallet() {
    this._account = this.readInFile();
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