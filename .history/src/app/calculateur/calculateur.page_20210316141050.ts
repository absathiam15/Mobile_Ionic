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
    await
  }

}
