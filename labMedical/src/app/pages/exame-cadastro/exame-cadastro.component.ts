import { Component, OnInit } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'labM-exame-cadastro',
  templateUrl: './exame-cadastro.component.html',
  styleUrls: ['./exame-cadastro.component.css']
})
export class ExameCadastroComponent implements OnInit {
  date: Date = new Date()
  controle: String = "adicionar"
  pacientes: any = TabelaPacienteService.prototype.buscar()
  pacienteNome: String = ""

  id: any = ""
  idPaciente: any = ""
  nomeExame: String = ""
  dataExame: String = DateService.prototype.dataAtual()
  horaExame: String = DateService.prototype.horarioAtual()
  tipo: String = ""
  laboratorio: String = ""
  url: String = ""
  resultados: String = ""
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
      let resultados = TabelaExameService.prototype.buscar()
      resultado = resultados.find((item) => item.idPaciente.includes(this.id))
      this.id = resultado.id
      this.idPaciente = resultado.idPaciente
      this.nomeExame = resultado.nomeExame
      this.dataExame = resultado.dataExame
      this.horaExame = resultado.horaExame
      this.tipo = resultado.tipo
      this.laboratorio = resultado.laboratorio
      this.url = resultado.url
      this.resultados = resultado.resultados
      this.controle = "editar"
    } else {
      this.controle = "adicionar"
    }
  }
  recebedorEvento(pacientes: any) {
    this.pacientes = pacientes
  }
  adicionar() {
    TabelaExameService.prototype.cadastrar(this.setExame())
  }
  editar(id: String) {
    TabelaExameService.prototype.cadastrar(this.setExame(id))
  }
  deletar(id: String) {
    TabelaExameService.prototype.deletar(id)
  }
  setExame(id?: String) {
    let exame: Exame = {
      id: id ? id : "",
      idPaciente: this.idPaciente,
      nomeExame: this.nomeExame,
      dataExame: this.dataExame,
      horaExame: this.horaExame,
      tipo: this.tipo,
      laboratorio: this.laboratorio,
      url: this.url,
      resultados: this.resultados
    }
    return exame
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
