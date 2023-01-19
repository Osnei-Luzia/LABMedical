import { Component } from '@angular/core';

@Component({
  selector: 'labM-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent {
  nome: String = ""
  genero: String = ""
  dataNascimento: String = ""
  cpf: String = ""
  rg: String = ""
  orgEx: String = ""
  estadoCivil: String = ""
  telefone: String = ""
  email: String = ""
  naturalidade: String = ""
  contato: String = ""
  alergias: String = ""
  cuidados: String = ""
  convenio: String = ""
  convenioNumero: String = ""
  convenioValidade: String = ""
  
  onSubmit(form: any) {
    console.log(form)

  }

  /*
  function TestaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
    if (strCPF == "00000000000") return false;
  
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
  
    Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
      return true;
  }
  var strCPF = "12345678909";
  alert(TestaCPF(strCPF));
  */
}
