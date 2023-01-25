import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConectadoPage } from './conectado.page';

const routes: Routes = [
  {
    path: '',
    component: ConectadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConectadoPageRoutingModule {}
