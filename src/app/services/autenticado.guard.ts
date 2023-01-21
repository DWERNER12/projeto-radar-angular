import { HttpBackend, HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
  public authService: AuthService = new AuthService(this.http);
//===================
  constructor( 
    private router:Router,
    private http: HttpClient
    ) {}
//=====================

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = localStorage.getItem("token")
      console.log(token)
      if(token == null) return false;
      return this.authService.isAuthenticated(token.toString()).then();
      
  }
  
}
