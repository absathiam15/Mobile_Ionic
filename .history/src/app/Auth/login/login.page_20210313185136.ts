import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    private fb: Form
  ) { }

  ngOnInit() {
  }

  onSubmit(){
  //   this.authService.login(form.value).subscribe(
  //     (res)=>{
  //       console.log(res);
        
  //    // this.router.navigateByUrl('home');
  //   });
  }
}
