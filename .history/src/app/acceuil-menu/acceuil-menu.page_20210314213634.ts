import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-acceuil-menu',
  templateUrl: './acceuil-menu.page.html',
  styleUrls: ['./acceuil-menu.page.scss'],
})
export class AcceuilMenuPage implements OnInit {

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('token').then((token) => {
      console.log(token.roles[0]);
    });
  }
  

}
