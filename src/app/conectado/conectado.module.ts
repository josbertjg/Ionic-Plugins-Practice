import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConectadoPageRoutingModule } from './conectado-routing.module';

import { ConectadoPage } from './conectado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConectadoPageRoutingModule
  ],
  declarations: [ConectadoPage]
})
export class ConectadoPageModule {}
