import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteServico } from 'src/app/services/clienteServico';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
  ) { }

  ngOnInit(): void {
   let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      
      this.cliente = ClienteServico.buscaClienteId(id)
      
    }
    
  }
  public clientes:Cliente[] = ClienteServico.buscaClientes()
  public cliente:Cliente = {} as Cliente

  salvar() { 
    if(this.cliente.id > 0){
      ClienteServico.alteraCliente(this.cliente)
    }
    else {
    ClienteServico.adicionaCliente({
      id: this.cliente.id,
      nome: this.cliente.nome,
      telefone: this.cliente.telefone,
      email: this.cliente.email,
      cpf: this.cliente.cpf,
      cep: this.cliente.cep,
      logradouro: this.cliente.logradouro,
      numero: this.cliente.numero,
      complemento: this.cliente.complemento,
      bairro: this.cliente.bairro,
      cidade: this.cliente.cidade,
      estado: this.cliente.estado
    })
    }
    this.router.navigateByUrl("/lista-clientes")
    
  }

}
