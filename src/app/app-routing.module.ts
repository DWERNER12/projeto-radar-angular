import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroCampanhasComponent } from './views/cadastro-campanha/cadastro-campanhas.component';
import { CadastroClientesComponent } from './views/cadastro-cliente/cadastro-clientes.component';
import { CadastroLojasComponent } from './views/cadastro-loja/cadastro-lojas.component';
import { CadastroPedidosClientesComponent } from './views/cadastro-pedido-cliente/cadastro-pedidos-clientes.component';
import { CadastroProdutosComponent } from './views/cadastro-produto/cadastro-produtos.component';
import { HomeComponent } from './views/home/home.component';
import { ListaCampanhasComponent } from './views/lista-campanhas/lista-campanhas.component';
import { ListaClientesComponent } from './views/lista-clientes/lista-clientes.component';
import { ListaLojasComponent } from './views/lista-lojas/lista-lojas.component';
import { ListaPedidosComponent } from './views/lista-pedidos/lista-pedidos.component';
import { ListaProdutosComponent } from './views/lista-produtos/lista-produtos.component';
import { LoginComponent } from './views/login/login.component';
import { GoogleMapsDemoComponent } from './views/google-maps-demo/google-maps-demo.component';
import { AutenticadoGuard } from './services/guard/autenticado.guard';

const routes: Routes = [
 {path: 'login', component:LoginComponent},
 {path: 'home',  component:HomeComponent, canActivate: [AutenticadoGuard],},
 {path: 'dashboard',  component:DashboardComponent, canActivate: [AutenticadoGuard], },
 {path: 'cadastro-cliente', component:CadastroClientesComponent,canActivate: [AutenticadoGuard]},
 {path: 'lista-clientes', component:ListaClientesComponent, canActivate: [AutenticadoGuard]},
 {path: 'cadastro-cliente/:id', component:CadastroClientesComponent, canActivate: [AutenticadoGuard]},
 {path: 'cadastro-produto', component:CadastroProdutosComponent, canActivate: [AutenticadoGuard]},
 {path: 'lista-produtos', component:ListaProdutosComponent, canActivate: [AutenticadoGuard]},
 {path: 'cadastro-produto/:id', component:CadastroProdutosComponent, canActivate: [AutenticadoGuard]},
 {path: 'cadastro-pedido', component:CadastroPedidosClientesComponent, canActivate: [AutenticadoGuard]},
 {path: 'cadastro-pedido/:id', component:CadastroPedidosClientesComponent, canActivate: [AutenticadoGuard]},
 {path: 'lista-pedidos', component: ListaPedidosComponent, canActivate: [AutenticadoGuard]},
 {path: 'lista-lojas', component:  ListaLojasComponent, canActivate: [AutenticadoGuard]},
 {path: 'lista-campanhas', component:ListaCampanhasComponent, canActivate: [AutenticadoGuard]},
 {path: 'cadastro-loja', component:CadastroLojasComponent, canActivate: [AutenticadoGuard]},
 {path: 'cadastro-campanhas', component: CadastroCampanhasComponent, canActivate: [AutenticadoGuard]},
 {path: 'lojas-maps', component: GoogleMapsDemoComponent, canActivate: [AutenticadoGuard]},
 {path: '**', redirectTo:'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
