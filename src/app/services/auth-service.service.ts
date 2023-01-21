import { Login } from './../models/modeloLogin';
import { Logado } from './../models/modeloLogado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public async isAuthenticated(token: String): Promise<boolean> {
    let head_obj = new HttpHeaders().set("Authorization","bearer "+token);
    let loginRest: string | undefined = await firstValueFrom(this.http.get<string>(`${environment.API}/authToken/`, {headers:head_obj}))
    console.log(loginRest);
    if(loginRest == null) return false;
    return true;
  }
  

  constructor(private http: HttpClient) {
  }

  public async fazerLogin(login:Login): Promise<Logado | undefined> {
    console.log(login);
    let loginRest:Logado | undefined = await firstValueFrom(this.http.post<Logado>(`${environment.API}/login/`, login))
    console.log(loginRest);
    localStorage.setItem('usuarioLogado',loginRest.nome);
    localStorage.setItem('permissao',loginRest.permissao);
    localStorage.setItem('token',loginRest.token);

    return loginRest;
}
  
}
