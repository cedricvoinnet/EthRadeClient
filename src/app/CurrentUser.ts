import { Injectable } from "@angular/core";

@Injectable()
export class CurrentUser {
  username: string;
  password: string;
  key: string;
  appear: boolean = true;
  visible: boolean = true;
}
