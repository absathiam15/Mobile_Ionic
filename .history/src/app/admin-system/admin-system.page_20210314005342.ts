import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-system',
  templateUrl: './admin-system.page.html',
  styleUrls: ['./admin-system.page.scss'],
})
export class AdminSystemPage implements OnInit {

  constructor(
    private storage: Storage,
    private 
  ) { }

  ngOnInit() {
    this.storage.get(keyToken).then((token) => {
      console.log(token.roles[0]);
    });
  }

}
