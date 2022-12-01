import { Injectable } from '@angular/core';
import { PedidoServico } from './pedidoServico';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { 
    this.atualizaCarrinho
<<<<<<< HEAD
  }
=======
  } 
>>>>>>> 1d182f087a28782bab9355acddf4768e61221e76

  public quantidade:Number = 0

  atualizaCarrinho(){
    this.quantidade = PedidoServico.get().itens.length
  }
}
