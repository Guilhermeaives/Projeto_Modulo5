import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { Tab3Page } from './tab3.page';
import { HeaderModule } from '../componenetes/header/header.module';

@NgModule({
  imports: [
    CommonModule,    
    IonicModule,
    Tab3PageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
