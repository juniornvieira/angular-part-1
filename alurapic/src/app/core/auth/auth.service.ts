import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root' //this service going to be a instance for whole app
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {
    return this.http
      .post(
        API_URL + '/user/login',
        { userName, password },
        { observe: 'response' } // I'm saying: look I want full headers in response
      )
      .pipe(tap(res => {        // after post and before subscribe in sign.component.ts, execute it 
        const authToken = res.headers.get('x-access-token');
        console.log(`User ${userName} authenticated with token ${authToken}`)
      }));
  }
}