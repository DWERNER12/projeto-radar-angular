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
    
  ) { }

  ngOnInit(): void {
  }

  public clientes:Cliente[] = ClienteServico.buscaClientes()

  excluir(cliente:Cliente){
    ClienteServico.excluirCliente(cliente)
    this.clientes = ClienteServico.buscaClientes()
  }

}
