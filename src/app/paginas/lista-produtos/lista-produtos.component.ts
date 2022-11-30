import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoObserver } from 'src/app/services/produtoObserver.service';
import { ProdutoServico } from 'src/app/services/produtoServico';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(public produtoObserver: ProdutoObserver) { }

  ngOnInit(): void {
  }

  public produtos:Produto[] = ProdutoServico.buscaProduto()

  excluirProduto(produto:Produto){
    ProdutoServico.excluirProdutos(produto)
    this.produtos = ProdutoServico.buscaProduto()
    this.produtoObserver.atualizaEstoque()
  }

}
