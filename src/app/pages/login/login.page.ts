import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authFormLog: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private fireAuth: FireAuthService
  ) { }

  ngOnInit() {
    this.validaForm();
  }


  private validaForm(){
    this.authFormLog = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }
  singIn(){
    try {
      this.fireAuth.login(this.authFormLog.value);
      console.log('Usuario Logado');
    } catch (error) {      
      console.log(error);
    }
  }

}
