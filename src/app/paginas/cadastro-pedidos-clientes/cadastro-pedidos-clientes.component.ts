import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Produto } from 'src/app/interface/produto';
import { Pedido } from 'src/app/models/pedido';
=======
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interface/produto';
import { Pedido } from 'src/app/models/pedido';
import { CarrinhoService } from 'src/app/services/carrinho.service';
>>>>>>> 1905511520553b1582da0790c1352b9daa347206
import { PedidoServico } from 'src/app/services/pedidoServico';
import { ProdutoServico } from 'src/app/services/produtoServico';

@Component({
  selector: 'app-cadastro-pedidos-clientes',
  templateUrl: './cadastro-pedidos-clientes.component.html',
  styleUrls: ['./cadastro-pedidos-clientes.component.css']
})
export class CadastroPedidosClientesComponent implements OnInit {

<<<<<<< HEAD
  constructor(public pedido: Pedido) { }
=======
  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    //public pedido: Pedido,
    public carrinhoService : CarrinhoService
    ) { }
>>>>>>> 1905511520553b1582da0790c1352b9daa347206

  ngOnInit(): void {
  }

  public produtos:Produto[] = ProdutoServico.buscaProduto()
<<<<<<< HEAD

  mostraPedido: Produto[] = PedidoServico.get().itens
=======
  public produto:Produto = {} as Produto

  /*itens(): Produto[] {
    return this.pedido.itens;
  }

  removeItem(){

  }*/


>>>>>>> 1905511520553b1582da0790c1352b9daa347206

}
