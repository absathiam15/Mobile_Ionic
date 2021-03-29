import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    private storage: St
  ) { }

  public login(credentials: any): Observable<any>{
    return this.httpClient.post(this.Url, credentials);
  }

  public saveToken(keyToken: string, value: string): void{
    this.sto.set(keyToken, value);
  }
}
