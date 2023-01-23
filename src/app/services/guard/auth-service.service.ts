import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/modeloLogin';
import { Logado } from 'src/app/models/modeloLogado';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //mostrarNav = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    ) {
  }
  
  public async fazerLogin(login:Login): Promise<Boolean | undefined> {

    try{
      let loginRest:Logado | undefined = await firstValueFrom(this.http.post<Logado>(`${environment.API}/login/`, login))
      localStorage.setItem('usuarioLogado',loginRest.nome);
      localStorage.setItem('permissao',loginRest.permissao);
      localStorage.setItem('token',loginRest.token);
      //this.route.navigateByUrl('/dashboard')
      console.log(loginRest);
      return true;
      
    }catch(err){
      return false
    }
  }
  
  
  
}
