import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilMenuPageRoutingModule } from './acceuil-menu-routing.module';

import { AcceuilMenuPage } from './acceuil-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilMenuPageRoutingModule
  ],
  declarations: [AcceuilMenuPage]
})
export class AcceuilMenuPageModule {}
