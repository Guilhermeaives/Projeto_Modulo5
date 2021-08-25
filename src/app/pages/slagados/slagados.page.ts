import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-slagados',
  templateUrl: './slagados.page.html',
  styleUrls: ['./slagados.page.scss'],
})
export class SlagadosPage implements OnInit {
  produtos = [];
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getAllProducts().subscribe(results => {
      this.produtos.length = 0;

      for (let i = 0; i < results.length; i++) {
        let categoria = results[i].category

        if(categoria == "salgados"){
          this.produtos.push(results[i]);
        }
      }
    
    
    })
  }

}
