import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';

@Component({
  selector: 'labM-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {
  usuario: Usuario = {
    id: "",
    nome: "",
    email: "",
    imagem: "",
    senha: "",
    logado:""
  }
  
  confirmarSenha: String = ""
  onSubmit(form: any) {
    if (form.valid) {
      let usuario: Usuario = this.usuario
      TabelaUsuarioService.prototype.cadastrar(usuario)
      form.reset()
    }
  }
}
