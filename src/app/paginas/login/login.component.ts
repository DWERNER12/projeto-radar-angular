import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogadoService } from 'src/app/services/logado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private logadoService:LogadoService
    ) { }

  ngOnInit(): void {
  }
  
  public email:String = ""
  public senha:String = ""
  public mensagem:string = ""

  logar(){
    if(this.email === "5" && this.senha === "5"){
      localStorage.setItem("logado", "true")
      this.logadoService.notificar()
      //PROFESSOR A  daqui
      let url = "/cadastro-cliente"
      if(sessionStorage.getItem("urlAcessada")){
        const urlAcessada = sessionStorage.getItem("urlAcessada")
        if (urlAcessada) url = urlAcessada
      }
      this.router.navigateByUrl(url) 
      //======V até´aqui
      //this.router.navigateByUrl("/cadastro-cliente")
        
    }
    else{
      this.mensagem = "Usuário ou senha inválidos"
      this.email = ""
      this.senha = ""
    }
  }

}
