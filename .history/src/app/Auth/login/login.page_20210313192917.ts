import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
  public decodeToken(token: any): string{
    return jwt_decode(token);
  }
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;


  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }); 
  }

  public decodeToken(token: any): string{
    return jwt_decode(token);
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        this.authService.saveToken('token', )
        console.log(this.authService.getRoles("token"));        
      }
    );
  }
}
