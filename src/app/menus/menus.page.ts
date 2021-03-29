import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {TransactionsPage} from '../transactions/transactions.page';
import {CommissionsPage} from '../commissions/commissions.page';
import {CalculateurPage} from '../calculateur/calculateur.page';
// @ts-ignore
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {

  rootPage = TransactionsPage;
  pages = [];
  private nav: any;
  constructor(
    public menu: MenuController,
    // public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.pages = [
      {
        title: 'Menus', component: MenusPage
      },
      {
        title: 'Transaction', component: TransactionsPage
      },
      {
        title: 'Commissions', component: CommissionsPage
      },
      {
        title: 'Calculateur', component: CalculateurPage
      },
    ];
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  // logout() {
  //   this.afAuth.auth.signOut();
  // }
}
