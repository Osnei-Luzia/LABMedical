import { Component } from '@angular/core';

@Component({
  selector: 'labM-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {
  email: String = ""
  nome: String = ""
  senha: String = ""
  confirmarSenha: String = ""
}
