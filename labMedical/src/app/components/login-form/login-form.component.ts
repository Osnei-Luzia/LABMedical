import { Component } from '@angular/core';

@Component({
  selector: 'labM-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email : String = ""
  senha: String = ""
  placeHolderResetSenha(){
    alert("Funcionalidade em construção")
  }
}