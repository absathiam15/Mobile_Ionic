import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    reac
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
 