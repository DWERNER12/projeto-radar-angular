import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interface/produto';
import { Pedido } from 'src/app/models/pedido';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { PedidoServico } from 'src/app/services/pedidoServico';
import { ProdutoServico } from 'src/app/services/produtoServico';

@Component({
  selector: 'app-cadastro-pedidos-clientes',
  templateUrl: './cadastro-pedidos-clientes.component.html',
  styleUrls: ['./cadastro-pedidos-clientes.component.css']
})
export class CadastroPedidosClientesComponent implements OnInit {

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    //public pedido: Pedido,
    public carrinhoService : CarrinhoService
    ) { }

  ngOnInit(): void {
  }

  public produtos:Produto[] = ProdutoServico.buscaProduto()
  public produto:Produto = {} as Produto

  /*itens(): Produto[] {
    return this.pedido.itens;
  }

  removeItem(){

  }*/



}
