import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoObserver } from 'src/app/services/produtoObserver.service';
import { ProdutoServico } from 'src/app/services/produtoServico';
import { Router } from '@angular/router';
import { PedidoServico } from 'src/app/services/pedidoServico';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Pedido } from 'src/app/models/pedido';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    private http: HttpClient,
    public produtoObserver: ProdutoObserver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.pedido = PedidoServico.get()
  }

  public produtos:Produto[] = ProdutoServico.buscaProduto()
  public pedido:Pedido = {} as Pedido

    this.produtoServico = new ProdutoServico(this.http)
    this.listaProdutos()
  }

  private produtoServico: ProdutoServico = {} as ProdutoServico
  public produtos: Produto[] | undefined = []

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
