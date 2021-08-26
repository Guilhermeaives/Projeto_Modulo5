import { Injectable } from '@angular/core';
import { iosTransitionAnimation, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private loadingControl: LoadingController) { }

  async loadMessage(message, duration) {
    let load = await this.loadingControl.create({
      mode: 'ios',
      message,
      duration
    });

    await load.present();
  } 
}
