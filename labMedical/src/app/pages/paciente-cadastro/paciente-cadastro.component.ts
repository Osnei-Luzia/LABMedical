import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalAvisoComponent } from 'src/app/shared/modal-aviso/modal-aviso.component';
import { Constants } from 'src/app/constants/constants';
import { Paciente } from 'src/app/models/paciente';
import { DateService } from 'src/app/services/date.service';
import { ModalMensagem } from 'src/app/services/modal-mensagem.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';

@Component({
  selector: 'labM-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit {
  controle: String = "adicionar"
  id: any = ""

  paciente: Paciente = {
    id: "",
    nome: "",
    genero: "",
    dataNascimento: "2000-01-01",
    cpf: "",
    rg: "",
    orgEx: "",
    estadoCivil: "",
    telefone: "",
    email: "",
    naturalidade: "",
    contato: "",
    alergias: "",
    cuidados: "",
    convenio: "",
    convenioNumero: "",
    convenioValidade: DateService.prototype.dataAtual(),
    cep: "",
    cepCampos:
    {
      localidade: "",
      uf: "",
      logradouro: "",
      complemento: "",
      numero: "",
      bairro: "",
      pontoRef: "",
    },
    imagem: ""

  }
  constructor(private activatedRoute: ActivatedRoute, private mensagemModal: ModalMensagem) {

  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    let resultado: any
    if (this.id) {
      let resultados = TabelaPacienteService.prototype.buscar()
      resultado = resultados.find((item) => item.id.includes(this.id))
      this.paciente = resultado
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
          this.editar()
          break;
        case "deletar":
          this.deletar(this.id)
          break;
      }
    }
    this.controle = "adicionar"
    form.reset()
  }
  adicionar() {
    TabelaPacienteService.prototype.cadastrar(this.paciente)
    this.mensagemModal.chamarModal("Paciente","cadastrado")
  }
  editar() {
    TabelaPacienteService.prototype.cadastrar(this.paciente)
    this.mensagemModal.chamarModal("Paciente","editado")
  }
  deletar(id: String) {
    TabelaPacienteService.prototype.deletar(id)?
    this.mensagemModal.chamarModal("Paciente","deletado"):""
  }
  
  async buscarCep() {
    try {
      let resultadoCep: any = await fetch(new Constants(this.paciente.cep).VIACEP_API)
      resultadoCep = await resultadoCep.json()
      this.paciente.cepCampos = resultadoCep
    } catch {
      alert("Cep Inválido")
    }
  }
  formReset() {
    this.controle = "adicionar"
  }
}
