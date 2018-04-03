import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ConnectionService {
  private url = "http://localhost:5000";

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
      password: data["password"]
    });
  }
}
