import { Component } from '@angular/core';
import { FireAuthService } from '../services/fire-auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private fireAuth: FireAuthService) {}

  sair(){
    this.fireAuth.logout();
  }

}
