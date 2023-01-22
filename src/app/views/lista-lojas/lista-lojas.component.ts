import { LojaServico } from './../../services/serviceLojas/lojaServico';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loja } from 'src/app/models/modeloLoja';

@Component({
  selector: 'app-lista-lojas',
  templateUrl: './lista-lojas.component.html',
  styleUrls: ['./lista-lojas.component.css']
})
export class ListaLojasComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }
  
  private LojaServico:LojaServico = {} as LojaServico
  public lojas:Loja[] | undefined = []
  public loja:Loja | undefined = {} as Loja

  ngOnInit(): void { //INICIANDO A LISTA DE LOJAS COM O OBJETO CARREGADO DA API
    this.LojaServico = new LojaServico(this.http)
    this.listaLojas()
  }

  private async listaLojas(){ //METODO QUE LISTA OS LOJAS PEGANDO DA API JUNTO COM O 'LOJA SERVICO'
   this.lojas = await this.LojaServico.listarLojas();
  }

  novoLoja(){
    this.router.navigateByUrl("cadastro-loja")
  }

  editarLoja(id:Number){
    this.router.navigateByUrl(`/cadastro-loja/${id}`)
  }

  public async deletar(id:Number){
    await this.LojaServico.excluirLojaPorId(id);
    //this.router.navigate('/lista-lojas');
    this.redirectTo('/lista-lojas')
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  async GetLocation(id:Number) {
    var geocoder = new google.maps.Geocoder();
    this.loja = await this.LojaServico.buscarLojaPorId(id)
    var address = `${this.loja?.logradouro}`
    geocoder.geocode({ 'address': address }, function (results:any, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        } else {
            alert("Request failed.")
        }
    });
  }
}
