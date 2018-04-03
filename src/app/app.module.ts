import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from "./app.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { WalletComponent } from "./wallet/wallet.component";
import { SettingsComponent } from "./settings/settings.component";
import { AppRoutingModule } from ".//app-routing.module";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { QRCodeModule } from "angularx-qrcode";
import { CurrentUser } from "./CurrentUser";
import { ConnectionService } from "./services/connection.service";
import { EthereumService } from "./services/ethereum.service";
import { ContactsService } from "./services/contacts.service";

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    ContactsComponent,
    WalletComponent,
    SettingsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [CurrentUser, ConnectionService, EthereumService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
