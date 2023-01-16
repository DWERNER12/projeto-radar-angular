import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogadoService } from './logado.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
//===================A adicionado daqui
  constructor( 
    private logadoService: LogadoService,
    private router:Router
    ) {}
//=====================V adicionado ate aqui

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //PROFESSOR
      sessionStorage.setItem("urlAcessada", state.url)
      //======V
      //===========================A adicionado daqui
      if(!this.logadoService.logado){
        this.router.navigateByUrl("/login")
        return false
      }
      //=======================V adicionado até aqui
    return true
  }
  
}
