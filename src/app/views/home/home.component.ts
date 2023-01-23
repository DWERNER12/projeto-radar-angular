import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TokenServico } from 'src/app/services/token/tokenServico';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  private usuarioValido:TokenServico = {} as TokenServico

  ngOnInit(): void {
    this.usuarioValido = new TokenServico(this.http);

  }

  async chamarFuncao(){
  }

  
}
