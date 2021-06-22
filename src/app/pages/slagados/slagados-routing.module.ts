import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlagadosPage } from './slagados.page';

const routes: Routes = [
  {
    path: '',
    component: SlagadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlagadosPageRoutingModule {}
