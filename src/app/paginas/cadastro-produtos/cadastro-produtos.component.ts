import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interface/produto';
import { LogadoService } from 'src/app/services/logado.service';
import { ProdutoObserver } from 'src/app/services/produtoObserver.service';
import { ProdutoServico } from 'src/app/services/produtoServico';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
})
export class CadastroProdutosComponent implements OnInit {
  ProdutoObserver: any;

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private logadoService: LogadoService,
    private produtoObserver: ProdutoObserver
  ) {}

  ngOnInit(): void {
    if (this.logadoService.redirecionaLoginNaoLogado()) return;

    this.produtoServico = new ProdutoServico(this.http);

    let id: Number = this.routerParams.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.editaProduto(id);
    }

    this.produto = {} as Produto;
  }

  private async editaProduto(id: Number) {
    let produtoEdit = await this.produtoServico.buscaPorId(id);
    if (produtoEdit) {
      this.produto = produtoEdit;
    }
  }

  public produtos: Produto[] = ProdutoServico.buscaProduto();
  public produto: Produto = {} as Produto;

  salvarProduto() {
    if (this.produto.id > 0) {
      ProdutoServico.alteraProduto(this.produto);
    } else {
      ProdutoServico.adicionaProduto({
        id: this.produto.id,
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        valor: this.produto.valor,
        qtd_estoque: this.produto.qtd_estoque,
      });
    }

    this.produtoObserver.atualizaEstoque();
    this.router.navigateByUrl('/lista-produtos');
  }
}
