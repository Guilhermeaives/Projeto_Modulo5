import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  produtosArray = [];
  
  constructor(
    private produtosServe: ProdutosService
  ) {}

  ngOnInit(): void {
   this.produtosServe.getAllProducts().subscribe(carrinho => this.produtosArray = carrinho);
  }



}
