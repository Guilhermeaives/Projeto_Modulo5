import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
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
    private pedidosServe: PedidosService,
    private toastControl: ToastController
    
  ) { }

  ngOnInit() {
    this.validaForm();
    this.produtosServe.getAllProducts().subscribe(carrinho => this.produtosList = carrinho);
  }

  validaForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(3)]],
      celular: ['', [Validators.required, Validators.minLength(3)]],
      pedidos: [''],
      menssagem: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

   //Método da menssagem toast
   async toastMessage(message, color){
    const toast = await this.toastControl.create({
      mode: 'ios',
      message,
      color,
      duration: 2000
    });
    toast.present();
  }

  cadastrar(){
    try {
      this.pedidosServe.addPedido(this.form.value);
      this.form.reset()
      this.toastMessage('Pedido Cadastrado com Sucesso', 'success');
    } catch (error) {
      this.toastMessage(error, 'danger')
    }
    
   
  }

}
