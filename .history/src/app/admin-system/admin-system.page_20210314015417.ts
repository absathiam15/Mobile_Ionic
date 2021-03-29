import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-admin-system',
  templateUrl: './admin-system.page.html',
  styleUrls: ['./admin-system.page.scss'],
})
export class AdminSystemPage implements OnInit {

  constructor(
    private storage: Storage,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.storage.get-.then((token) => {
      console.log(token.roles[0]);
    });
  }

}
