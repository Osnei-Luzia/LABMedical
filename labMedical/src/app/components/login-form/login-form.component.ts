import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
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
    usuarios.forEach((usuario) => {
      if (this.email == usuario.email) {
        if (this.senha == usuario.senha) {
          this.route.navigateByUrl("/home/inicio")
          this.status = false
        }
      } else {
        this.status = true
      }
    })
  }
  constructor(private route:Router){

  }
}
