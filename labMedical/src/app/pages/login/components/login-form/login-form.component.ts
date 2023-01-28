import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';

@Component({
  selector: 'labM-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
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
        this.status = true
        if (this.senha == usuario.senha) {
          usuario.logado = "true"
          TabelaUsuarioService.prototype.cadastrar(usuario)
          this.route.navigateByUrl("/home/inicio")
          this.status = false
        }
      } else {
        this.status = true
      }
    })
  }
  ngOnInit(): void {
    let resultados = TabelaUsuarioService.prototype.buscar()
    if(resultados.find((item) => item.logado.includes("true"))){
      this.route.navigateByUrl("/home/inicio")
    }
  }
  constructor(private route: Router) {

  }
}
