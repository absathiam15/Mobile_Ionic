import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  U:  string  =  'http://localhost:3000';
authSubject  =  new  BehaviorSubject(false);

  constructor() { }
}
