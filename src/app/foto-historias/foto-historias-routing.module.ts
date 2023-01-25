import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoHistoriasPage } from './foto-historias.page';

const routes: Routes = [
  {
    path: '',
    component: FotoHistoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoHistoriasPageRoutingModule {}
