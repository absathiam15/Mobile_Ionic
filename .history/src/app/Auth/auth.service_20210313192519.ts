import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Storage} from '@ionic/storage';
import { AuthResponse } from './auth-response';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Url =  'http://127.0.0.1:8000/api/login';
  authSubject  =  new  BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private storage: Storage
  ) { }

  login(credentials: any): Observable<any>{
    return this.httpClient.post(this.Url, credentials);
  }

  saveToken(keyToken: string, value: string): void{
    this.storage.set(keyToken, value);
  }

  getRoles(keyToken: any): any{
    this.storage.get(keyToken).then((token) => {
      console.log(token.roles[0]);
    });
  }
}
