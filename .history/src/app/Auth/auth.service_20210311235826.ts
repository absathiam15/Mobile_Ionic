import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Url =  'http://127.0.0.1:8000';
authSubject  =  new  BehaviorSubje(false);

  constructor() { }
}
