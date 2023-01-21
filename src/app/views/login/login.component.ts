import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth-service.service';
import { LogadoService } from 'src/app/services/logado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }

  private authService:AuthService = {} as AuthService

  ngOnInit(): void {
    this.authService = new AuthService(this.http,this.router);    
  }
  
  public email:string = ""
  public senha:string = ""
  public mensagem:string = ""

  async logar(){
    await this.authService.fazerLogin({
      email: this.email,
      senha: this.senha
    });

  }

}
