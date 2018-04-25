import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ContactsService {
  private url = "http://192.168.0.26:5000";

  constructor(private http: HttpClient) { }

  addContact(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
      })
    };
    return this.http.post(this.url + "/contacts", {
      username: data.new_contact.username,
      key: data.new_contact.key
    }, httpOptions);
  }

  getContact(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
      })
    };
    return this.http.get(this.url + "/contacts", httpOptions);
  }

  getUsers(data): Observable<any> {
    console.log(this.url + "/users")
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
      })
    };
    return this.http.get(this.url + "/users", httpOptions);
  }

  setVisible(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
      })
    };
    return this.http.post(this.url + "/visible", {'visible': data.visible}, httpOptions)
  }
}
