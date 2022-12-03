import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho-notificacao',
  templateUrl: './carrinho-notificacao.component.html',
  styleUrls: ['./carrinho-notificacao.component.css']
})
export class CarrinhoNotificacaoComponent implements OnInit {

  constructor(public carrinhoService : CarrinhoService) { }

  ngOnInit(): void {
  }
  


}
