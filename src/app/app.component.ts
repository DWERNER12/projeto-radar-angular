import { Component } from '@angular/core';
import { CarrinhoService } from './services/carrinho.service';
import { LogadoService } from './services/logado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radar';
  constructor(
    public carrinhoService : CarrinhoService,
    public logadoService : LogadoService
  ) { }
  

  ngOnInit(): void {
    
  }
}
