import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Url =  'http://127.0.0.1:8000';
authSubject  =  new  BehaviorSubject(false);

  constructor(
    private httpC
  ) { }
}
