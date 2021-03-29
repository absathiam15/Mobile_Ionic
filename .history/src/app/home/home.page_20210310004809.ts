import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private loading: LoadingController
  ) {}

  ngOnInit() {
    this.loading.create({
      cssClass: "Classe",
    })
    .then(chargement => {
      chargement.present();
      setTimeout(() => {})
    }) ;
  }
}
