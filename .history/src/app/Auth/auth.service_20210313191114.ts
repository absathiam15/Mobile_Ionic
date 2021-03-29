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
  ) { }

  
}
