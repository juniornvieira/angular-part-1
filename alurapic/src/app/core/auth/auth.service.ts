import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root' //this service going to be a instance for whole app
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {
    return this.http
      .post(
        API_URL + '/user/login',
        { userName, password },
        { observe: 'response' } // I'm saying: look I want full headers in response
      )
      .pipe(tap(res => {        // after post and before subscribe in sign.component.ts, execute it 
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`User ${userName} authenticated with token ${authToken}`)
      }));
  }
}