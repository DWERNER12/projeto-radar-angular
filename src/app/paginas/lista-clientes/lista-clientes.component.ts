import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ClienteServico } from 'src/app/services/clienteServico';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(
    private router:Router,
    private http:HttpClient,
    private cd: ChangeDetectorRef,
    public carrinhoService : CarrinhoService,

  ) { }

  private clienteService: ClienteServico = {} as ClienteServico

  ngOnInit(): void {
    this.clienteService = new ClienteServico(this.http)
    this.listaClientes()
  }


  public clientes:Cliente[] | undefined = []

 
  private async listaClientes(){
    this.clientes = await new ClienteServico(this.http).lista();
  }

  excluir(cliente:Cliente){
    this.clienteService.excluirPorId(cliente.id)
    this.listaClientes()
    this.cd.detectChanges()
  }

  novoCliente(){
    this.router.navigateByUrl("/cadastro-cliente")
  }

  selecionaCliente(){
    // TODO
  }

}