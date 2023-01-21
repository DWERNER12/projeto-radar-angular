import { LojaServico } from './../../services/serviceLojas/lojaServico';
import { Loja } from './../../models/modeloLoja';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
})
export class GoogleMapsDemoComponent {
  apiLoaded: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private router:Router,
  ) {
    this.apiLoaded = http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyC_swsQQ2u2w3S5tunR9SjpwbsYMlIWUS8', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  public lojas:Loja[] | undefined = []
  private lojaServico:LojaServico = {} as LojaServico

  ngOnInit(): void {
    this.lojaServico = new LojaServico(this.http);
    this.listaLojas();
    console.log(this.markerPositions);
  }

  private async listaLojas(){ //METODO QUE LISTA OS PRODUTOS PEGANDO DA API JUNTO COM O 'PRODUTO SERVICO'
    this.lojas = await this.lojaServico.listarLojas();
    await this.marcarLojas();
  }

  center: google.maps.LatLngLiteral = {lat: -23.5566584, lng: -46.6612175};
  zoom = 11;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  private marcarLojas(){
    if(this.lojas){
      for(let loja of this.lojas){
        let cords = {lat: loja.latitude, lng: loja.longitude}

        this.markerPositions.push(cords)
      }
    }
  }

}