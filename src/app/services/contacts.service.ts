import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ContactsService {
  private url = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  addContact(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
      })};
    return this.http.post(this.url + "/contacts", {
      surname: data.new_contact.surname,
      key: data.new_contact.key
    }, httpOptions);
  }

  getContact(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
  })};
    return this.http.get(this.url + "/contacts", httpOptions);
  }
}
