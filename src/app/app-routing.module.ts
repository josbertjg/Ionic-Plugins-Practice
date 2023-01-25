import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConectadoGuard } from './guardians/conectado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'conectado',
    loadChildren: () => import('./conectado/conectado.module').then( m => m.ConectadoPageModule),
    canActivate:[ConectadoGuard]
  },
  {
    path: 'foto-historias',
    loadChildren: () => import('./foto-historias/foto-historias.module').then( m => m.FotoHistoriasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
