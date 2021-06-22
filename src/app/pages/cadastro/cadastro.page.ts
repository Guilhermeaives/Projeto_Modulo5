import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fireAuth: FireAuthService
  ) { }

  ngOnInit() {
    this.validaForm();
  }
 

  private validaForm(){
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  createUser(){
    try {
      this.fireAuth.cadLogin(this.authForm.value);
     
    } catch (error) {      
     console.log(error);
    }
  }
}
