import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroClientesComponent } from './views/cadastro-clientes/cadastro-clientes.component';
import { CadastroPedidosClientesComponent } from './views/cadastro-pedidos-clientes/cadastro-pedidos-clientes.component';
import { CadastroProdutosComponent } from './views/cadastro-produtos/cadastro-produtos.component';
import { HomeComponent } from './views/home/home.component';
import { ListaClientesComponent } from './views/lista-clientes/lista-clientes.component';
import { ListaProdutosComponent } from './views/lista-produtos/lista-produtos.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
 {path: '', component:HomeComponent},
 {path: 'login', component:LoginComponent},
 {path: 'cadastro-cliente', component:CadastroClientesComponent},
 {path: 'lista-clientes', component:ListaClientesComponent},
 {path: 'altera-cliente/:id', component:CadastroClientesComponent},
 {path: 'cadastro-produto', component:CadastroProdutosComponent},
 {path: 'lista-produtos', component:ListaProdutosComponent},
 {path: 'altera-produto/:id', component:CadastroProdutosComponent},
 {path: 'pedidos', component:CadastroPedidosClientesComponent},
 {path: 'dashboard', component:DashboardComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
