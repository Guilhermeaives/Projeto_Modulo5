import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  produtosArray = [];
  mais: boolean;
  idRoute = null;

  constructor(
    private produtosServe: ProdutosService,
    private activeRoute: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messageService.loadMessage("Carregando...", '2000');
    this.chooseCategory();
  }

  chooseCategory() {
    this.idRoute = this.activeRoute.snapshot.params['id'];

    if (this.idRoute) {
      this.produtosServe.getAllProducts().subscribe(carrinho => {

        for (let i = 0; i < carrinho.length; i++) {
          let category = carrinho[i].category;

          if (this.idRoute == 0 && category == 'cup_cake') {
            this.produtosArray.push(carrinho[i]);

          } else if (this.idRoute == 1 && category == 'pirulito') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 2 && category == 'bolo_palito') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 3 && category == 'trufas') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 4 && category == 'cone') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 5 && category == 'bombons') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 6 && category == 'diversos') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 7 && category == 'pao_mel') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 8 && category == 'retrato') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 9 && category == 'bolo') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 10 && category == 'salgados') {
            this.produtosArray.push(carrinho[i])

          } else if (this.idRoute == 11 && category == 'docinho') {
            this.produtosArray.push(carrinho[i])

          } else {
            console.log("Categoria não encontrada")
          }
        }
      });
    }

  }

  view(){
    this.mais = !this.mais;
  }

}







