import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interface/produto';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { LogadoService } from 'src/app/services/logado.service';
import { ProdutoObserver } from 'src/app/services/produtoObserver.service';
import { ProdutoServico } from 'src/app/services/produtoServico';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
  ProdutoObserver: any;

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    private logadoService: LogadoService,
    private produtoObserver: ProdutoObserver,
    public carrinhoService : CarrinhoService
  ) { }

  ngOnInit(): void {
    if(this.logadoService.redirecionaLoginNaoLogado()) return
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      
      this.produto = ProdutoServico.buscaProdutoId(id)
      
    }
  }
  
  public produtos:Produto[] = ProdutoServico.buscaProduto()
  public produto:Produto = {} as Produto
  

  salvarProduto() {
    if(this.produto.id > 0){
      ProdutoServico.alteraProduto(this.produto)
    } else {
      ProdutoServico.adicionaProduto({
        id: this.produto.id,
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        valor: this.produto.valor,
        qtd_estoque: this.produto.qtd_estoque
      })
      
    }
    
    this.produtoObserver.atualizaEstoque()
    this.router.navigateByUrl("/lista-produtos")
  }

}
