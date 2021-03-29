import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  public returnUrl:any
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }); 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        const tokenDecode = this.authService.decodeToken(data.token);
        console.log(tokenDecode);
    this.router.navigate(['/tabs/menu']);
        
        this.authService.saveToken('token', tokenDecode );
        // console.log(this.authService.getRoles("token"));        
        if(data==="ROLE_ADMIN_SYSTEM") 
        {
          //console.log("role admin"+this.returnUrl);
         this.returnUrl='/tabs/acceuil-menu';
        }
      
      }
    );
  }

  // login() {
  //   // On récupère l'url de redirection
  //   const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/acceuil-menu'; 
  //   // On accède à la page souhaitée
  //   this.router.navigate([redirectUrl]);
  //   //this.authentificationService.login(this.model);
  //   this.authService.login(this.model);
  //   // console.log(this.authenticationService.getToken());
  // }
}
