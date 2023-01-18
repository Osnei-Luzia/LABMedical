import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';

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

  onSubmit(form: any) {
    if (form.valid) {
      let usuario: Usuario = {
        id: "",
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }
      TabelaUsuarioService.prototype.cadastrar(usuario)
      form.reset()
    }
  }
}
