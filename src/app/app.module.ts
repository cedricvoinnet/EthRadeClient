import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WalletComponent } from './wallet/wallet.component';
import { SettingsComponent } from './settings/settings.component';
import { ConnectionComponent } from './connection/connection.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    ContactsComponent,
    WalletComponent,
    SettingsComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
