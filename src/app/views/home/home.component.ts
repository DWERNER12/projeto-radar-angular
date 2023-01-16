import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public carrinhoService : CarrinhoService
  ) { }

  ngOnInit(): void {
    
  }

}
