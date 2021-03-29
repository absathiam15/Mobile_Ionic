import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  errorMessage: string = '';
  loading: any;
  public returnUrl: any;
  model: any = {};
  showpassword = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
      ]))
    });

    this.storage.clear();
  }

  /*get f()
  {
    return this.loginForm.controls;
  }*/

  togglePasswordText ()
  {
    this.showpassword = !this.showpassword ;
  }

  validation_messages = {
    'username': [
      { type: 'required', message: "L'utilisateur est obligatoire. " },
      { type: 'pattern', message: 'Entrer un utilisateur qui existe.' }
    ],
    'password': [
      { type: 'required', message: 'Le mot de passe est obligatoire.' },
      { type: 'minlength', message: 'Le mot de passe doit contenir au moins 6 caracteres' }
    ]
  };


  onSubmit() {
    this.storage.clear();

    this.authService.login(this.loginForm.value).subscribe(
      data => {
        const tokenDecode = this.authService.decodeToken(data.token);
        //console.log(tokenDecode);

        this.authService.saveToken('token', tokenDecode );
        this.authService.saveToken('auth-token', data.token);
        // console.log(this.authService.getRoles("token"));
        if (data === 'ROLE_ADMIN_AGENCE')
        {
          console.log("role admin"+this.returnUrl);
          this.router.navigate(['/tabs/menus']);
        }
        else if (data==='ROLE_USER_AGENCE')
        {
         // console.log("role admin"+this.returnUrl);
          this.returnUrl='user';
        }
        else if (data==="ROLE_ADMIN_SYSTEM")
        {
          //console.log("role admin"+this.returnUrl);
          this.returnUrl='user';
        }
        else if (data==="ROLE_CAISSIER")
        {
          //console.log("role admin"+this.returnUrl);
          this.returnUrl='user';
        }
        this.router.navigate(['/tabs/menus']);
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
