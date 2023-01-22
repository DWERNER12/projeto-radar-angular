import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Cliente } from 'src/app/models/modeloCliente';
import { PedidoProduto } from 'src/app/models/modeloPedidoProduto';
import { Pedido } from 'src/app/models/modeloPedidos';
import { Produto } from 'src/app/models/modeloProduto';
import { ModeloClientesEstado } from 'src/app/models/modelViewDash/modeloClientesEstado';
import { ModeloProdutoInfo } from 'src/app/models/modelViewDash/modeloProdutoInfo';
import { ClienteServico } from 'src/app/services/serviceClientes/clienteServico';
import { PedidoProdutoServico } from 'src/app/services/servicePedidosProdutos/pedidoProdutoServico';
import { PedidoServico } from 'src/app/services/servicesPedidos/pedidoServico';
import { ProdutoServico } from 'src/app/services/servicesProdutos/produtoServico';
import { DashboardServico } from 'src/app/services/servicoDashboard/dashboardServico';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // ==================== DECLARAÇÃO DE SERVICOS PARA API ====================
  private pedidoServico: PedidoServico = {} as PedidoServico;
  private clienteServico: ClienteServico = {} as ClienteServico;
  private pedidoProdutoServico: PedidoProdutoServico = {} as PedidoProdutoServico;
  private produtoServico: ProdutoServico = {} as ProdutoServico;
  private servicoDash: DashboardServico = {} as DashboardServico;
  // ==========================================================================

  // ==================== PRODUTO INFO PARA O DASH ====================
    
  public produtoInfoDash:ModeloProdutoInfo[] | any= [];
  public clientesPorEstadoDash:ModeloClientesEstado[] | any = [];
  // ==================================================================


  // ==================== VALORES TOTAIS DO DASH ====================
  public valTotal: number = 0; // R$ VALOR TOTAL
  public qtdTotalClientes: number | any = 0; //QTD TOTAL DE CLIENTES
  public qtdTotalPedidos: number = 0; //QTD TOTAL DE PEDIDOS
  public qtdtotalProdutos: number = 0; //QTD TOTAL DE PRODUTOS
  // =================================================================


  // ==================== DADOS MAPA DE CALOR ====================
  public dadosMapaDeCalor: any[] = [];

  tipoGraficoMapaDeCalor: ChartType = ChartType.GeoChart;
  public optionsMapaDeCalor = {
    region: 'BR',
    resolution: 'provinces',
    width: 750,
    height: 330,
    colorAxis: {
      colors: [
        '#EAF2F8',
        '#D4E6F1',
        '#A9CCE3',
        '#7FB3D5',
        '#5499C7',
        '#2980B9',
        '#2471A3',
        '#1F618D',
        '#1A5276',
        '#154360',
      ],
    },
  };
  // =================================================================

  public descPedidosCharts: any = {
    clicado: false,
    nomeProduto: '',
    valorTotal: 0,
  };
  
  public descProdutosCharts: any = {
    clicado: false,
    nomeProduto: '',
    qtdEstoque: 0,
    qtdVendida: 0,
  };

  // declarar dados
  public pedido: Pedido | undefined = {} as Pedido;
  public pedidoProduto: PedidoProduto | any = {} as PedidoProduto;
  public cliente: Cliente | undefined = {} as Cliente;

  public produtos: Produto[] | any = [];
  public pedidosProdutos: any = [];
  public pedidos: any = [];
  public todosClientes: any = [];

  //TIPO CHARTS
  bar: ChartType = ChartType.Bar;
  pedidosPorMedicamento: ChartType = ChartType.PieChart;
  
  graficoColuna: ChartType = ChartType.ColumnChart;

  ///////////////////////////////////////////

  //DADOS GOOGLE - CHART  QTD PRODUTOS EM ESTOQUE
  public dadosQtdProdEstoqueDash: any[] = [];

  public dadosMedicamento: any = [];

  public dataGraficoColuna: any = [];

  ////////////////////////////////////

  //OPTIONS DOS CHARTS
  public optionsColuna = {
    width: 600,
    legend: { position: 'none' },
    bar: { groupWidth: '80%' },
  };

  public optionsProdutos = {
    pieSliceText: 'label',
    legend: { position: 'none' },
  };

  public optionsMedicamento = {
    pieSliceText: 'none',
    pieHole: 0.4,
  };
  
  /////////////////////////////////////////////////

  ngOnInit(): void {
    this.pedidoServico = new PedidoServico(this.http);
    this.clienteServico = new ClienteServico(this.http);
    this.pedidoProdutoServico = new PedidoProdutoServico(this.http);
    this.produtoServico = new ProdutoServico(this.http);
    this.servicoDash = new DashboardServico(this.http);
    this.chamarDados();
  }

  private async chamarDados() {
    this.produtos = await this.produtoServico.listarProdutos();
    this.pedidosProdutos = await this.pedidoProdutoServico.listarPedidoProduto();
    this.qtdTotalClientes = await this.clienteServico.listarTamanhoClientes();

    this.produtoInfoDash = await this.servicoDash.modeloProdutoInfo();    
    this.pedidos = await this.pedidoServico.listarPedidos();//************** */
    this.clientesPorEstadoDash = await this.servicoDash.modeloClientesPorEstado();


     //DADOS PRODUTOS - VENDIDOS
    let novoProd = [];
    for (let i = 0; i < this.produtoInfoDash.length; i++) {
      let key = this.produtoInfoDash[i].nome;
      let valor = this.produtoInfoDash[i].qtd_total_vendida;
      novoProd.push([key, valor]);
    }
    this.dataGraficoColuna = novoProd;

    //DADOS PRODUTOS - ESTOQUE
    let listaNovaProdutos = [];
    for (let i = 0; i < this.produtos.length; i++) {
      listaNovaProdutos.push([
        this.produtoInfoDash[i].nome,
        this.produtoInfoDash[i].qtd_estoque,
      ]);
    }
    this.dadosQtdProdEstoqueDash = listaNovaProdutos;
    console.log(listaNovaProdutos);
     //DADO GRAFICO GEOGRAFICO - CALOR
    //  let listaClientesPorEstado = [];
    //  for (let i = 0; i < this.todosClientes.length; i++) {
    //    listaClientesPorEstado.push([`BR-${this.todosClientes[i].estado}`, 1]);
    //  }
    //  let Estadofiltrado: any = {};
    //  for (let i = 0; i < listaClientesPorEstado.length; i++) {
    //    let dado = listaClientesPorEstado[i];
    //    if (Estadofiltrado[dado[0]]) {
    //      Estadofiltrado[dado[0]] += dado[1];
    //    } else {
    //      Estadofiltrado[dado[0]] = dado[1];
    //    }
    //  }
    // let chavesCliente = Object.keys(Estadofiltrado);
    let novoDado = [];
    for (let i = 0; i < this.clientesPorEstadoDash.length; i++) {
      let key = this.clientesPorEstadoDash[i];
      let valor = this.clientesPorEstadoDash[i];
      novoDado.push([key, valor]);
    }
    console.log(novoDado);
    this.dadosMapaDeCalor = novoDado;
    console.log("Dados mapa de calor " + this.dadosMapaDeCalor);


    
    /*
    this.todosClientes = await this.clienteServico.listarClientes();

    this.modeloServicoProdutoInfo = await this.servicoDash.modeloProdutoInfo();



    
    /* ------------------------------------------------------------------------------*/

    /*
    //DADOS GANHO POR PEDIDOS
    let listaPedidosProdutosNova = [];
    for (let i = 0; i < this.pedidosProdutos.length; i++) {
      listaPedidosProdutosNova.push([
        this.produtos[this.pedidosProdutos[i].produto_Id - 1].nome,
        this.pedidosProdutos[i].valor_Total,
      ]);
    }

    let filtrado: any = {};
    for (let i = 0; i < listaPedidosProdutosNova.length; i++) {
      let dado = listaPedidosProdutosNova[i];
      if (filtrado[dado[0]]) {
        filtrado[dado[0]] += dado[1];
      } else {
        filtrado[dado[0]] = dado[1];
      }
    }
    let chaves = Object.keys(filtrado);
    let novo = [];
    for (let i = 0; i < chaves.length; i++) {
      let key = chaves[i];
      let valor = filtrado[key];
      novo.push([key, valor]);
    }
    this.dadosMedicamento = novo;
    /* --------------------------------------------------------------------------------------------------*/

    //DADOS QTD DE PRODUTOS VENDIDOS
    /*
    
    
    /* --------------------------------------------------------------------------------------------------*/

    //DADO GANHO TOTAL
    for (let i = 0; i < this.pedidos.length; i++) {
      this.valTotal += this.pedidos[i].valor_Total;
    }

    //DADOS PEDIDOS
    for (let i = 0; i < this.pedidos.length; i++) {
      this.qtdTotalPedidos += 1;
    }
    console.log(this.qtdTotalPedidos)

    //TOTAL DE PRODUTOS
    for (let i = 0; i < this.produtos.length; i++) {
      this.qtdtotalProdutos += 1;
    }


    

    /* --------------------------------------------------------------------------------------------------*/
  
    /*
   

    
    /* --------------------------------------------------------------------------------------------------*/

    console.log('Lista estado', this.dadosMapaDeCalor);

    // console.log(listaPedidosProdutosNova)
    // console.log(this.pedidos)
    // console.log(this.pedidosProdutos)
    // console.log(listaNovaProdutos)
  }

  selecionado($event: any) {
    console.log($event);
    try {
      const { row, column } = $event.selection[0];
      const year = this.dadosQtdProdEstoqueDash[row][0];
      let teste: any = {};
      for (let i = 0; i < this.dataGraficoColuna.length; i++) {
        let dado = this.dataGraficoColuna[i];
        if (teste[dado[0]]) {
          teste[dado[0]] += dado[1];
        } else {
          teste[dado[0]] = dado[1];
        }
      }
      
      this.descProdutosCharts = {
        clicado: true,
        nomeProduto: year,
        qtdEstoque: this.dadosQtdProdEstoqueDash[row][column],
        qtdVendida: teste[year],
      };
      console.log(this.descProdutosCharts);
    } catch (err) {
      this.descProdutosCharts.clicado = false;
      console.log(err);
    }
  }

  selecionadoPizza($event: any) {
    try {
      const { row, column } = $event.selection[0];
      const year = this.dadosMedicamento[row][0];
      let teste: any = {};
      for (let i = 0; i < this.dadosMedicamento.length; i++) {
        let dado = this.dadosMedicamento[i];
        if (teste[dado[0]]) {
          teste[dado[0]] += dado[1];
        } else {
          teste[dado[0]] = dado[1];
        }
      }

      this.descPedidosCharts = {
        clicado: true,
        nomeProduto: year,
        valorTotal: teste[year],
      };

      console.log(year);
      console.log(teste[year]);

    } catch (err) {
      this.descPedidosCharts.clicado = false;
      console.log(err);
    }
  }

}
