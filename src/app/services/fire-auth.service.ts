import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  //Método de Login
  login(user){
    return this.fireAuth.signInWithEmailAndPassword(user.email, user.password)
  }

  //Método de cadastro de usuários
  cadLogin(user){
    return this.fireAuth.createUserWithEmailAndPassword(user.email, user.password)
  }

  //Métodoe que retorna dados dos usuários
  getAuth(){
    return this.fireAuth
  }

  logout(){
    return this.fireAuth.signOut();
  }
}
