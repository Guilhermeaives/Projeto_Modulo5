import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-doces',
  templateUrl: './doces.page.html',
  styleUrls: ['./doces.page.scss'],
})
export class DocesPage implements OnInit {
  produtos = [];
  constructor( private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getAllProducts().subscribe(results => {
      this.produtos.length = 0;

      for (let i = 0; i < results.length; i++) {
        let categoria = results[i].category

        if(categoria != "bolo" && categoria != "salgados" ){
          this.produtos.push(results[i]);
        }
      }
    
    
    })
  }


}
