import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/app/models/modeloProduto';
import { ProdutoServico } from 'src/app/services/servicesProdutos/produtoServico';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})

export class ListaProdutosComponent implements OnInit {
  
  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }

  public produtos:Produto[] | undefined = []
  private produtoServico:ProdutoServico = {} as ProdutoServico 

  ngOnInit(): void {
    this.produtoServico = new ProdutoServico(this.http)
    this.listaProdutos()
  }

  
  private async listaProdutos(){ //METODO QUE LISTA OS PRODUTOS PEGANDO DA API JUNTO COM O 'PRODUTO SERVICO'
    this.produtos = await this.produtoServico.listarProdutos();
  }

  novoProduto(){
    this.router.navigateByUrl("cadastro-produto")
  }

  editarProduto(id:Number){
    this.router.navigateByUrl(`/cadastro-produto/${id}`)
  }
  async deletar(id:Number){
    await this.produtoServico.excluirProdutoPorId(id);
    this.redirectIt('/lista-produtos')
  }
  public redirectIt(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
