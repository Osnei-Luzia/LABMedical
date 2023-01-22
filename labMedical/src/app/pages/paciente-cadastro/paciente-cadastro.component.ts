import { Component } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { Paciente } from 'src/app/models/paciente';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';

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
  cep: String = ""
  cepCampos: any = 
  {
    cidade: "",
    estado: "",
    logradouro: "",
    complemento: "",
    numero: "",
    bairro: "",
    pontoRef: "",
  }

  //fazer objeto para endereço

  onSubmit(form: any) {
    if (form.valid) {
      let paciente: Paciente = {
        id: "",
        nome: this.nome,
        genero: this.genero,
        dataNascimento: this.dataNascimento,
        cpf: this.cpf,
        rg: this.rg,
        orgEx: this.orgEx,
        estadoCivil: this.estadoCivil,
        telefone: this.telefone,
        email: this.email,
        naturalidade: this.naturalidade,
        contato: this.contato,
        alergias: this.alergias,
        cuidados: this.cuidados,
        convenio: this.convenio,
        convenioNumero: this.convenioNumero,
        convenioValidade: this.convenioValidade,
        cep: this.cep,
        cepCampos: this.cepCampos
      }
      TabelaPacienteService.prototype.cadastrar(paciente)
      form.reset()
    }
  }
  async buscarCep() {
    try{
      let resultadoCep: any = await fetch(new Constants(this.cep).VIACEP_API)
      resultadoCep = await resultadoCep.json()
      this.cepCampos.cidade = resultadoCep.localidade
      this.cepCampos.estado = resultadoCep.uf
      this.cepCampos.logradouro = resultadoCep.logradouro
      this.cepCampos.complemento = resultadoCep.complemento
      this.cepCampos.bairro = resultadoCep.bairro

    }catch{
      alert("Cep Inválido --fazer um catch melhor")
    }
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
