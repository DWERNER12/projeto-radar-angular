import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pedidos-clientes',
  templateUrl: './cadastro-pedidos-clientes.component.html',
  styleUrls: ['./cadastro-pedidos-clientes.component.css']
})
export class CadastroPedidosClientesComponent implements OnInit {

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    
    ) { }
  ngOnInit(): void {
  }


}
