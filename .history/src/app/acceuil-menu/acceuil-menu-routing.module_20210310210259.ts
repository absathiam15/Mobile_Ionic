import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilMenuPage } from './acceuil-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilMenuPage, 
    children: [
      {
        path: 'transactions',
        loadChildren: () => import('../transactions/transactions.module').then( m => m.TransactionsPageModule)
      },
      {
        path: 
      },
      {
        path: 'commissions',
        loadChildren: () => import('../commissions/commissions.module').then( m => m.CommissionsPageModule)
      },
      {
        path: 'calculateur',
        loadChildren: () => import('../calculateur/calculateur.module').then( m => m.CalculateurPageModule)
      },
      {
        path: 'menus',
        loadChildren: () => import('../menus/menus.module').then( m => m.MenusPageModule)
      },
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilMenuPageRoutingModule {}
