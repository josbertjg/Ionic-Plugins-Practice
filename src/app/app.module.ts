import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//PLUGINS
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },NativeStorage,Camera,Dialogs,Network],
  bootstrap: [AppComponent],
})
export class AppModule {}
