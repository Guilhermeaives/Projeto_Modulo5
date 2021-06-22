import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlagadosPageRoutingModule } from './slagados-routing.module';

import { SlagadosPage } from './slagados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlagadosPageRoutingModule
  ],
  declarations: [SlagadosPage]
})
export class SlagadosPageModule {}
