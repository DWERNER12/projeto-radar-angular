import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteServico } from 'src/app/services/clienteServico';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(
    private router:Router,
    private http:HttpClient
    
  ) { }

  ngOnInit(): void {
    this.listaClientes()
  }

  public clientes:Cliente[] | undefined = []

  private async listaClientes(){
    this.clientes = await new ClienteServico(this.http).lista();
  }

  excluir(cliente:Cliente){
    ClienteServico.excluirCliente(cliente)
    this.clientes = ClienteServico.buscaClientes()
  }

  novoCliente(){
    this.router.navigateByUrl("/cadastro-cliente")
  }

  selecionaCliente(){
    
  }

}
