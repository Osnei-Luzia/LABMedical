import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { TabelaConsultaService } from 'src/app/services/tabela-consulta.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/services/date.service';
import { ModalMensagem } from 'src/app/services/modal-mensagem.service';

@Component({
  selector: 'labM-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent implements OnInit {
  date: Date = new Date()
  controle: String = "adicionar"
  pacientes: any = TabelaPacienteService.prototype.buscar()
  pacienteNome: String = ""
  id: any = ""

  consulta: Consulta = {
    id: "",
    idPaciente: "",
    motivo: "",
    dataConsulta: DateService.prototype.dataAtual(),
    horaConsulta: DateService.prototype.horarioAtual(),
    descricao: "",
    medicacao: "",
    precaucoes: "",
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
      this.controle = "adicionar"
      form.reset()
    }
  }
  ngOnInit(): void {
    let resultado: any
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      let resultados = TabelaConsultaService.prototype.buscar()
      resultado = resultados.find((item) => item.id.includes(this.id))
      this.consulta = resultado
      this.controle = "editar"
    } else {
      this.controle = "adicionar"
    }
  }
  recebedorEvento(pacientes: any) {
    this.pacientes = pacientes
  }
  adicionar() {
    TabelaConsultaService.prototype.cadastrar(this.consulta)
    this.mensagemModal.chamarModal("Consulta", "cadastrada")
  }
  editar() {
    TabelaConsultaService.prototype.cadastrar(this.consulta)
    this.mensagemModal.chamarModal("Consulta", "editada")
  }
  deletar(id: String) {
    TabelaConsultaService.prototype.deletar(id)
    this.mensagemModal.chamarModal("Consulta", "deletada")
  }

  colocaId(id: any, nome: String) {
    this.consulta.idPaciente = id
    this.pacienteNome = nome
  }
  formReset() {
    this.controle = "adicionar"
  }
  constructor(private activatedRoute: ActivatedRoute, private mensagemModal: ModalMensagem) {

  }
}