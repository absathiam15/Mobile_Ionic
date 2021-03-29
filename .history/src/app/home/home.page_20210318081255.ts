import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private loading: LoadingController,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.loading.create({
      cssClass: "Classe",
    })
    .then(chargement => {
      chargement.present();
      setTimeout(() => {
        chargement.dismiss();
        this.router.navigate(['/login']);
      }, 3000);
    }) ;   
  }
  
}
