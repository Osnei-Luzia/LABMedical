import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { TabelaConsultaService } from 'src/app/services/tabela-consulta.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'labM-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent implements OnInit{
  date: Date = new Date()
  controle: String = "adicionar"
  pacientes: any = TabelaPacienteService.prototype.buscar()
  pacienteNome: String = ""

  id: any = ""
  idPaciente: any = ""
  motivo: String = ""
  dataConsulta: String = DateService.prototype.dataAtual()
  horaConsulta: String = DateService.prototype.horarioAtual()
  descricao: String = ""
  medicacao: String = ""
  precaucoes: String = ""

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
      this.controle = "adicionar"
      form.reset()
    }
  }
  ngOnInit(): void {
    let resultado: any
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      let resultados = TabelaConsultaService.prototype.buscar()
      resultado = resultados.find((item) => item.idPaciente.includes(this.id))
      this.id = resultado.id
      this.idPaciente = resultado.idPaciente
      this.motivo = resultado.motivo
      this.dataConsulta = resultado.dataConsulta
      this.horaConsulta = resultado.horaConsulta
      this.descricao = resultado.descricao
      this.medicacao = resultado.medicacao
      this.precaucoes = resultado.precaucoes
      this.controle = "editar"
    } else {
      this.controle = "adicionar"
    }
  }
  recebedorEvento(pacientes: any) {
    this.pacientes = pacientes
  }
  adicionar() {
    TabelaConsultaService.prototype.cadastrar(this.setConsulta())
  }
  editar(id: String) {
    TabelaConsultaService.prototype.cadastrar(this.setConsulta(id))
  }
  deletar(id: String) {
    TabelaConsultaService.prototype.deletar(id)
  }
  setConsulta(id?: String) {
    let consulta: Consulta = {
      id: id ? id : "",
      idPaciente: this.idPaciente,
      motivo: this.motivo,
      dataConsulta: this.dataConsulta,
      horaConsulta: this.horaConsulta,
      descricao: this.descricao,
      medicacao: this.medicacao,
      precaucoes: this.precaucoes,
    }
    return consulta
  }
  colocaId(id: any, nome: String) {
    this.idPaciente = id
    this.pacienteNome = nome
  }
  formReset(){
    this.controle = "adicionar"
  }
  constructor(private activatedRoute: ActivatedRoute) {

  }
}