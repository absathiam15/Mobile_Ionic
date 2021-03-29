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

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.Url + '/login', user)
    //pipe(
      // tap(async (res:  AuthResponse ) => {

      //   if (res.user) {
      //     await this.storage.set("ACCESS_TOKEN", res.user.access_token);
      //     await this.storage.set("EXPIRES_IN", res.user.expires_in);
      //     this.authSubject.next(true);
      //   }
      // })
  //  );
  }
}
