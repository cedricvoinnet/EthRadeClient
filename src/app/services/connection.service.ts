import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ConnectionService {
  private url = "http://192.168.0.26:5000";

  constructor(private http: HttpClient) {}

  login(data): Observable<any> {
    return this.http.post(this.url + "/login", {
      username: data["username"],
      password: data["password"]
    });
  }

  register(data): Observable<any> {
    return this.http.post(this.url + "/register", {
      username: data["username"],
      password: data["password"],
      key: data["key"]
    });
  }

  getHistory(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
      })
    };
    return this.http.get(this.url + "/history", httpOptions);
  }

  sendTransaction(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'username': data.user.username,
        'password': data.user.password,
      })
    };
    return this.http.post(this.url + "/history", {
      'from': data.from,
      'to': data.to,
      'amount': data.amount
    }, httpOptions);
  }
}
