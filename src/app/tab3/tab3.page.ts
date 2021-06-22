import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from '../services/pedidos.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  produtosList = [];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtosServe: ProdutosService,
    private pedidosServe: PedidosService
  ) { }

  ngOnInit() {
    this.validaForm();
    this.produtosServe.getAllProducts().subscribe(carrinho => this.produtosList = carrinho);
  }

  validaForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.minLength(3)]],
      celular: ['', [Validators.required, Validators.minLength(3)]],
      pedidos: ['', [Validators.required, Validators.minLength(3)]],
      menssagem: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  cadastrar(){
    try {
      this.pedidosServe.addPedido(this.form.value)
    } catch (error) {
      console.log(error)
    }
    
   
  }

}
