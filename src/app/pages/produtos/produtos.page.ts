import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  idRoute = null;
  produto = {}

  constructor(
    private ar: ActivatedRoute,
    private produtos: ProdutosService
  ) { }

  ngOnInit() {
    this.idRoute = this.ar.snapshot.params['id'];


    if (this.idRoute) {
      this.produtos.getProdutos(this.idRoute).subscribe(carrinho => this.produto = carrinho);
      
    } 

  }

}
