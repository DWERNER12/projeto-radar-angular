import { Injectable } from '@angular/core';
import { PedidoServico } from './pedidoServico';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { 
    this.atualizaCarrinho
  }

  public quantidade:Number = 0

  atualizaCarrinho(){
    this.quantidade = PedidoServico.get().itens.length
  }
}
