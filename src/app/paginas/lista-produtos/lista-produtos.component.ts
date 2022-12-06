import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoObserver } from 'src/app/services/produtoObserver.service';
import { ProdutoServico } from 'src/app/services/produtoServico';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoServico } from 'src/app/services/pedidoServico';
import { CarrinhoService } from 'src/app/services/carrinho.service';

import { HttpClient } from '@angular/common/http';

import { Pedido } from 'src/app/models/pedido';
import { LogadoService } from 'src/app/services/logado.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  
  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router,
    private routerParams: ActivatedRoute,
    private logadoService: LogadoService,
    private http:HttpClient,
    public produtoObserver: ProdutoObserver,
    private cd: ChangeDetectorRef
  ) { }

  private produtoServico: ProdutoServico = {} as ProdutoServico;
  public produtos: Produto[] | undefined = []
  public produto: Produto = {} as Produto
  ProdutoObserver: any;

  ngOnInit(): void {
    this.produtoServico = new ProdutoServico(this.http)
    this.listaProdutos()
  }


  private async listaProdutos() {
    this.produtos = await this.produtoServico.lista();
  }

  async excluirProduto(produto: Produto) {
    await this.produtoServico.excluirPorId(produto.id)
    this.listaProdutos()
    //this.produtoObserver.atualizaEstoque()
    this.cd.detectChanges()
  }

  novoProduto() {
    this.router.navigateByUrl("/cadastro-produto")
  }

  addCarrinho(produto: Produto) {
    PedidoServico.get().idCliente = 1
    PedidoServico.get().itens.push(produto)
    this.carrinhoService.atualizaCarrinho()
  }

}
  
