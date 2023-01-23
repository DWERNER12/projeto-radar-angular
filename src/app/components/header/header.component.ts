import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServico } from 'src/app/services/token/tokenServico';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  mostrarNav = new EventEmitter<boolean>();

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  private authServico:TokenServico = {} as TokenServico;
     
  ngOnInit(): void {
    this.authServico = new TokenServico(this.http)
  }

  async logout()
  {
    localStorage.clear();
    await this.authServico.tokenValido();
    this.mostrarNav.emit(false);
    this.redirectTo('/login')
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

}



