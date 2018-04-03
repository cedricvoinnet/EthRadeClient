import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { SettingsComponent } from "./settings/settings.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { WalletComponent } from "./wallet/wallet.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "settings", component: SettingsComponent },
  { path: "transactions", component: TransactionsComponent },
  { path: "wallet", component: WalletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
