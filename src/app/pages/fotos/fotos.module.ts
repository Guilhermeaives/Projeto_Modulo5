import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotosPageRoutingModule } from './fotos-routing.module';

import { FotosPage } from './fotos.page';
import { HeaderModule } from 'src/app/componenetes/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotosPageRoutingModule,
    HeaderModule
  ],
  declarations: [FotosPage]
})
export class FotosPageModule {}
