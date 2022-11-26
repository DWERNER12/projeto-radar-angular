import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CadastroProdutosComponent } from './paginas/cadastro-produtos/cadastro-produtos.component';
import { CadastroClientesComponent } from './paginas/cadastro-clientes/cadastro-clientes.component';
import { CadastroPedidosClientesComponent } from './paginas/cadastro-pedidos-clientes/cadastro-pedidos-clientes.component';
import { LoginComponent } from './paginas/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CadastroProdutosComponent,
    CadastroClientesComponent,
    CadastroPedidosClientesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
