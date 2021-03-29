import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from './auth-response';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Url =  'http://127.0.0.1:8000/api';
  authSubject  =  new  BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private storage: Storage
  ) { }

  login(user: User) {
    return this.http.post<any>(`http://127.0.0.1:8000/api/login`,user)
                .pipe(
                   map(user: user) => {
                    localStorage.setItem('token', user.token);
                     let tokenInfo=this.getInfoToken(user['token']);
                    localStorage.setItem('currentUserInfo',JSON.stringify(tokenInfo));
                    //console.log(tokenInfo.roles[0]);
                    return tokenInfo.roles[0];
                })
                );
    // return this.httpClient.post<AuthResponse>(this.Url + '/login', user).pipe(
      

        // if (res.user) {
        //   await this.storage.set("ACCESS_TOKEN", res.user.access_token);
        //   await this.storage.set("EXPIRES_IN", res.user.expires_in);
        //   this.authSubject.next(true);
        // }
      )

    ;
  }
}
