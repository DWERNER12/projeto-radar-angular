import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interface/produto';
import { LogadoService } from 'src/app/services/logado.service';
import { ProdutoObserver } from 'src/app/services/produtoObserver.service';
import { ProdutoServico } from 'src/app/services/produtoServico';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private routerParams: ActivatedRoute,
    private logadoService: LogadoService,
    private produtoObserver: ProdutoObserver
  ) { }

  private produtoServico: ProdutoServico = {} as ProdutoServico;
  public produtos: Produto[] = []
  public produto: Produto = {} as Produto
  ProdutoObserver: any;

  ngOnInit(): void {
    if (this.logadoService.redirecionaLoginNaoLogado()) return

    this.produtoServico = new ProdutoServico(this.http)

    let id: Number = this.routerParams.snapshot.params['id']
    console.log(id)
    if (id) {
      this.editaProduto(id)
    }

    this.produto = {} as Produto
  }

  private async editaProduto(id: Number) {
    let produtoEdit = await this.produtoServico.buscaPorId(id)
    if (produtoEdit) {
      this.produto = produtoEdit
    }
  }

  salvarProduto() {
    if (this.produto && this.produto.id > 0) {
      this.produtoServico.update(this.produto)
    } else {

      let nome = this.produto?.nome
      let descricao = ""
      let valor = 0
      let qtd_estoque = 0

      if (this.produto) {
        descricao = this.produto.descricao.toString()
        valor = Number(this.produto.valor)
        qtd_estoque = Number(this.produto.qtd_estoque)
      }

      this.produtoServico.criar({
        id: 0,
        nome: nome,
        descricao: descricao,
        valor: valor,
        qtd_estoque: qtd_estoque,
      });
    }

    this.produtoObserver.atualizaEstoque()
    this.router.navigateByUrl("/lista-produtos")
  }

}
