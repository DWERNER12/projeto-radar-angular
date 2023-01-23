import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { TokenServico } from '../token/tokenServico';


@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
  mostrarNav = new EventEmitter<boolean>();
  
  constructor( 
    private router:Router,
    private http:HttpClient
    ) {}
  
  private authServico:TokenServico = {} as TokenServico

      canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isValido();
    

  }

  async isValido(){
    this.authServico = new TokenServico(this.http)
    var resposta =  await this.authServico.tokenValido();
    if(resposta == true){
      this.mostrarNav.emit(true);
      return true;
    }else{
      this.mostrarNav.emit(false);
      return false;
    }
  }

}
