import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  public email:String = ""
  public senha:String = ""
  public mensagem:string = ""

  logar(){
    if(this.email === "5" && this.senha === "5"){
      localStorage.setItem("logado", "true")
      let url = "/cadastro-cliente"
      if(sessionStorage.getItem("urlAcessada")){
        const urlAcessada = sessionStorage.getItem("urlAcessada")
        if (urlAcessada) url = urlAcessada
      }
      this.router.navigateByUrl(url) 
        
    }
    else{
      this.mensagem = "Usuário ou senha inválidos"
      this.email = ""
      this.senha = ""
    }
  }

}
