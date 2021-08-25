import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.page.html',
  styleUrls: ['./bolos.page.scss'],
})
export class BolosPage implements OnInit {
  produtos = [];
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getAllProducts().subscribe(results => {
      this.produtos.length = 0;

      for (let i = 0; i < results.length; i++) {
        let categoria = results[i].category

        if(categoria == "bolo"){
          this.produtos.push(results[i]);
        }
      }
    
    
    })
  }

}
