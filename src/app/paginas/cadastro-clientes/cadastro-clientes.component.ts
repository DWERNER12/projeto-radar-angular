import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteServico } from 'src/app/services/clienteServico';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
  public clientes:Cliente[] = ClienteServico.buscaClientes()
  public cliente:Cliente = {} as Cliente

  salvar() { 
    ClienteServico.adicionaCliente(this.cliente)
    
  }

}
