import { LojaServico } from './../../services/serviceLojas/lojaServico';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { GoogleMapsDemoComponent } from './google-maps-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GoogleMapsDemoComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
  ],
  exports: [
    GoogleMapsDemoComponent,
  ],
})
export class GoogleMapsDemoModule {}