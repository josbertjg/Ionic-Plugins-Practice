import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoHistoriasPageRoutingModule } from './foto-historias-routing.module';

import { FotoHistoriasPage } from './foto-historias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoHistoriasPageRoutingModule
  ],
  declarations: [FotoHistoriasPage]
})
export class FotoHistoriasPageModule {}
