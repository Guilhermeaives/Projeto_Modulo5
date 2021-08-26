import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  categorias = [
    {id: 0, category: "Cup Cake"},
    {id: 1, category: "Pirulitos"},
    {id: 2, category: "Bolo no Palito"},
    {id: 3, category: "Trufas"},
    {id: 4, category: "Árvores"},
    {id: 5, category: "Bombons"},
    {id: 6, category: "Diversos"},
    {id: 7, category: "Pão de Mel"},
    {id: 8, category: "Porta Retrato"},
    {id: 9, category: "Bolos"},
    {id: 10, category: "Salgados"},
    {id: 11, category: "Docinhos"},
  ];
  mais: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  view(){
    this.mais = !this.mais;
  }


}
