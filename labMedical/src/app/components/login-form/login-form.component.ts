import { Component } from '@angular/core';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';

@Component({
  selector: 'labM-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: String = ""
  senha: String = ""
  status: boolean = false
  placeHolderResetSenha() {
    alert("Funcionalidade em construção")
  }
  onSubmit() {
    const usuarios = TabelaUsuarioService.prototype.buscar()
    let check: boolean = false
    usuarios.forEach((usuario) => {
      if (this.email == usuario.email) {
        if (this.senha == usuario.senha) {
          check = true
          this.status = false
          //talvez resetar form
        }
      } else {
        this.status = true
      }
    })
  }
}
