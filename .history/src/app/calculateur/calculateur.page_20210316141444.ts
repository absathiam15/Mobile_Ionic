import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.page.html',
  styleUrls: ['./calculateur.page.scss'],
})
export class CalculateurPage implements OnInit {

  private alertCtrl: AlertController 
  constructor() { }

  ngOnInit() {
  }

  async showAlert() {
    await this.alertCtrl.create({
      header: "Calculateur",
      message: "Pour une transaction de 300 000 le frais est égal à: 12 000 F CFA",
      buttons: [
        {
          type: 'text', name
        }
      ]
    })
  }

}
