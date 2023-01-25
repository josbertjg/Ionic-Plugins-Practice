import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

//PLUGINS
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class ConectadoGuard implements CanActivate {

  access:boolean=true;

  constructor(private net:Network,private dialog:Dialogs,private router:Router){
    if(this.net.type=="none"){
      this.dialog.alert("No tienes conección a internet, chequea tu conección para tener acceso a todas las funcionalidades del app")
      this.access=false;
    }
    this.net.onConnect().subscribe(()=>{
      this.dialog.alert("Acceso concedido ya que te conectaste a una red tipo "+this.net.type)
      this.access=true;
    })
    this.net.onDisconnect().subscribe(()=>{
      this.router.navigate(['home'])
      this.dialog.alert("No tienes acceso, debes tener conección a internet.")
      this.access=false;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.access;
  }

}
