import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CadastroProdutosComponent } from './paginas/cadastro-produtos/cadastro-produtos.component';
import { CadastroClientesComponent } from './paginas/cadastro-clientes/cadastro-clientes.component';
import { CadastroPedidosClientesComponent } from './paginas/cadastro-pedidos-clientes/cadastro-pedidos-clientes.component';
import { LoginComponent } from './paginas/login/login.component';
import { FormsModule } from '@angular/forms';
import { ListaClientesComponent } from './paginas/lista-clientes/lista-clientes.component';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarrinhoNotificacaoComponent } from './componentes/carrinho-notificacao/carrinho-notificacao.component';


registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CadastroProdutosComponent,
    CadastroClientesComponent,
    CadastroPedidosClientesComponent,
    LoginComponent,
    ListaClientesComponent,
    ListaProdutosComponent,
    FooterComponent,
    CarrinhoNotificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
