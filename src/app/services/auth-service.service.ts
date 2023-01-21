import { Login } from './../models/modeloLogin';
import { Logado } from './../models/modeloLogado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public async fazerLogin(login:Login): Promise<Logado | undefined> {
    let loginRest:Logado | undefined = await firstValueFrom(this.http.post<Logado>(`${environment.API}/login/`, login))

    localStorage.setItem('usuarioLogado',loginRest.nome);
    localStorage.setItem('permissao',loginRest.permissao);
    localStorage.setItem('token',loginRest.token);

    return loginRest;
}
  
}
