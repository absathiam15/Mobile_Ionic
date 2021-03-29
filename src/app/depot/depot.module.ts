import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepotPageRoutingModule } from './depot-routing.module';

import { DepotPage } from './depot.page';
import {HttpClientModule} from '@angular/common/http';
import {HTTPInterceptorServiceProvider} from '../Service/interceptor.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DepotPageRoutingModule
  ],
  providers: [
    HTTPInterceptorServiceProvider
  ],
  declarations: [DepotPage]
})
export class DepotPageModule {}
