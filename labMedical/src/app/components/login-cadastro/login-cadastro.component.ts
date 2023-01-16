import { Component } from '@angular/core';

@Component({
  selector: 'labM-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {
  nome: String = ""
  email: String = ""
  senha: String = ""
  confirmarSenha: String = ""
  onSubmit(){
  
  }
}
