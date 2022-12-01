import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoObserver } from 'src/app/services/produtoObserver.service';
import { ProdutoServico } from 'src/app/services/produtoServico';
import { Router } from '@angular/router';
import { PedidoServico } from 'src/app/services/pedidoServico';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  
  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router,
    public produtoObserver: ProdutoObserver
  ) { }

  ngOnInit(): void {
  }

  public produtos:Produto[] = ProdutoServico.buscaProduto()

  excluirProduto(produto:Produto){
    ProdutoServico.excluirProdutos(produto)
    this.produtos = ProdutoServico.buscaProduto()
    this.produtoObserver.atualizaEstoque()
  }

  novoProduto(){
    this.router.navigateByUrl("/cadastro-produto")
  }

  addCarrinho(produto:Produto){
    PedidoServico.get().idCliente = 1
    PedidoServico.get().itens.push(produto)
    this.carrinhoService.atualizaCarrinho()
  }

}
