import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { Paciente } from 'src/app/models/paciente';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';

@Component({
  selector: 'labM-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit {
  controle: String = "adicionar"
  id: any = ""
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
  constructor(private activatedRoute: ActivatedRoute) {

  }
  //fazer objeto para endereço
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    let resultado: any
    if (this.id) {
      let resultados = TabelaPacienteService.prototype.buscar()
      resultado = resultados.find((item) => item.id.includes(this.id))
      console.log(resultado)
      this.nome = resultado.nome,
        this.genero = resultado.genero,
        this.dataNascimento = resultado.dataNascimento,
        this.cpf = resultado.cpf,
        this.rg = resultado.rg,
        this.orgEx = resultado.orgEx,
        this.estadoCivil = resultado.estadoCivil,
        this.telefone = resultado.telefone,
        this.email = resultado.email,
        this.naturalidade = resultado.naturalidade,
        this.contato = resultado.contato,
        this.alergias = resultado.alergias,
        this.cuidados = resultado.cuidados,
        this.convenio = resultado.convenio,
        this.convenioNumero = resultado.convenioNumero,
        this.convenioValidade = resultado.convenioValidade,
        this.cep = resultado.cep,
        this.cepCampos = resultado.cepCampos
      this.controle = "editar"
    } else {
      this.controle = "adicionar"
    }
  }
  onSubmit(form: any, submitId: any) {
    if (form.valid) {

      switch (submitId) {
        case "adicionar":
          this.adicionar()
          break;
        case "editar":
          this.editar(this.id)
          break;
        case "deletar":
          this.deletar(this.id)
          break;
      }
    }

    form.reset()
  }
  adicionar() {
    TabelaPacienteService.prototype.cadastrar(this.setPaciente())
  }
  editar(id: String) {
    TabelaPacienteService.prototype.cadastrar(this.setPaciente(id))
  }
  deletar(id: String) {
    TabelaPacienteService.prototype.deletar(id)
  }
  setPaciente(id?: String) {
    let paciente: Paciente = {
      id: id ? id : "",
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
    return paciente
  }
  async buscarCep() {
    try {
      let resultadoCep: any = await fetch(new Constants(this.cep).VIACEP_API)
      resultadoCep = await resultadoCep.json()
      this.cepCampos.cidade = resultadoCep.localidade
      this.cepCampos.estado = resultadoCep.uf
      this.cepCampos.logradouro = resultadoCep.logradouro
      this.cepCampos.complemento = resultadoCep.complemento
      this.cepCampos.bairro = resultadoCep.bairro
    } catch {
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
