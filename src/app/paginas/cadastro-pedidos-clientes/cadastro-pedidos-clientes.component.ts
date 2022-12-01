import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { Pedido } from 'src/app/models/pedido';
import { PedidoServico } from 'src/app/services/pedidoServico';
import { ProdutoServico } from 'src/app/services/produtoServico';

@Component({
  selector: 'app-cadastro-pedidos-clientes',
  templateUrl: './cadastro-pedidos-clientes.component.html',
  styleUrls: ['./cadastro-pedidos-clientes.component.css']
})
export class CadastroPedidosClientesComponent implements OnInit {

  constructor(
    public pedido: Pedido,
    ) { }

  ngOnInit(): void {
  }

  public produtos:Produto[] = ProdutoServico.buscaProduto()

  mostraPedido: Produto[] = PedidoServico.get().itens



}
