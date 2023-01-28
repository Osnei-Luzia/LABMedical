import { Component, OnInit } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/services/date.service';
import { ModalMensagem } from 'src/app/services/modal-mensagem.service';

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

  exame: Exame = {
    id: "",
    idPaciente: "",
    nomeExame: "",
    dataExame: DateService.prototype.dataAtual(),
    horaExame: DateService.prototype.horarioAtual(),
    tipo: "",
    laboratorio: "",
    url: "",
    resultados: ""
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
      this.controle = "adicionar"
      form.reset()
    }
  }
  ngOnInit(): void {
    let resultado: any
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      let resultados = TabelaExameService.prototype.buscar()
      resultado = resultados.find((item) => item.id.includes(this.id))
      this.exame = resultado
      this.controle = "editar"
    } else {
      this.controle = "adicionar"
    }
  }
  recebedorEvento(pacientes: any) {
    this.pacientes = pacientes
  }
  adicionar() {
    TabelaExameService.prototype.cadastrar(this.exame)
    this.mensagemModal.chamarModal("Exame","cadastrado")
  }
  editar(id: String) {
    TabelaExameService.prototype.cadastrar(this.exame)
    this.mensagemModal.chamarModal("Exame","editado")
  }
  deletar(id: String) {
    TabelaExameService.prototype.deletar(id)
    this.mensagemModal.chamarModal("Exame","deletado")
  }
  colocaId(id: any, nome: String) {
    this.exame.idPaciente = id
    this.pacienteNome = nome
  }
  formReset(){
    this.controle = "adicionar"
  }
  constructor(private activatedRoute: ActivatedRoute, private mensagemModal: ModalMensagem) {

  }
}
