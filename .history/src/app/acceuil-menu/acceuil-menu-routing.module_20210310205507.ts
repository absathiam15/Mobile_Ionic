import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilMenuPage } from './acceuil-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilMenuPage, 
    children
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilMenuPageRoutingModule {}
