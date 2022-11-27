import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './paginas/cadastro-clientes/cadastro-clientes.component';
import { ListaClientesComponent } from './paginas/lista-clientes/lista-clientes.component';

const routes: Routes = [
 // {path: 'cadastro-cliente', component:CadastroClientesComponent},
 // {path: 'lista-client', component: ListaClientesComponent},
 // {path: 'altera-cliente/:id', component: CadastroClientesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
