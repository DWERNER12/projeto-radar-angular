import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './paginas/cadastro-clientes/cadastro-clientes.component';
import { CadastroProdutosComponent } from './paginas/cadastro-produtos/cadastro-produtos.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaClientesComponent } from './paginas/lista-clientes/lista-clientes.component';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { LoginComponent } from './paginas/login/login.component';
import { AutenticadoGuard } from './services/autenticado.guard';

const routes: Routes = [
 {path: '', component:HomeComponent},
 {path: 'login', component:LoginComponent},
 {path: 'cadastro-cliente', component:CadastroClientesComponent , canActivate: [AutenticadoGuard]},
 {path: 'lista-clientes', component: ListaClientesComponent},
 {path: 'altera-cliente/:id', component: CadastroClientesComponent},
 {path: 'cadastro-produto', component: CadastroProdutosComponent, canActivate: [AutenticadoGuard]},
 {path: 'lista-produtos', component: ListaProdutosComponent},
 {path: 'altera-produto/:id', component: CadastroProdutosComponent},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
