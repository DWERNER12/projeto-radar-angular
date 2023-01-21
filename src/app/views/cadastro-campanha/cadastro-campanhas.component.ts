import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-campanhas',
  templateUrl: './cadastro-campanhas.component.html',
  styleUrls: ['./cadastro-campanhas.component.css']
})
export class CadastroCampanhasComponent implements OnInit {
  
  ngOnInit(): void {
  }

  movies = [
    'Cadastro Remédio 1 img1 ',
    'Cadastro Remédio 2 img2 ',
    'Cadastro Remédio 3 img3 ',
    'Cadastro Remédio 4 img4 ',
    'Cadastro Remédio 5 img5 ',
    'Cadastro Remédio 6 img6 ',
    'Cadastro Remédio 7 img7 ',
    'Cadastro Remédio 8 img8 ',
    'Cadastro Remédio 9 img9 ',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }



}
