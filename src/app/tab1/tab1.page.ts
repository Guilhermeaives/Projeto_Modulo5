import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {  

  constructor(
    private navControl: NavController
  ) { }

  segmentChanged(ev: any) {
    
    switch (ev.detail.value) {
      case 'doces':        
        this.navControl.navigateForward('/doces');
        break;
      case 'salgados':
        this.navControl.navigateForward('/salgados');
        break;

      case 'bolos':
        this.navControl.navigateForward('/bolos');
        break;
      default:
        this.navControl.navigateForward('/');
    }
    }

  

}
