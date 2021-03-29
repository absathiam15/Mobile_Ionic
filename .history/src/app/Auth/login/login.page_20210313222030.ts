import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        const tokenDecode = this.authService.decodeToken(response.token);
        console.log(tokenDecode);
        
        this.authService.saveToken('token', tokenDecode );
        // console.log(this.authService.getRoles("token"));        
        if(data==="ROLE_ADMIN")
        {
          console.log("role admin"+this.returnUrl);
         this.returnUrl='/home';
        }
        else if(data==="ROLE_FORMATEUR")
        {
          this.returnUrl='/formateur';
        }
      }
    );
  }
}
