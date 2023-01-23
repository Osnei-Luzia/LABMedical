import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { TabelaConsultaService } from 'src/app/services/tabela-consulta.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';

@Component({
  selector: 'labM-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent{
  date: Date = new Date()
  controle: String = "adicionar"
  pacientes: any = TabelaPacienteService.prototype.buscar()
  

  id: any = ""
  idPaciente: any = ""
  motivo: String = ""
  dataConsulta: String = ""
  //$("dataConsulta").datepicker("setDate", new Date().getFullYear()) ---- Instalar JQuery e setar default para o datePicker
  horaConsulta: String = `${this.date.getHours()}:${this.date.getMinutes()}`;
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
      form.reset()
    }
  }

  //fazer com que o resultado da pesquisa adicione os campos no formulário, transformar o select em collapse
  ngOnInit(): void {
    // let resultado: any
    // this.id = "199c7d33-8ca5-4d42-8230-92788c96080a"
    // if (this.id) {
    //   let resultados = TabelaConsultaService.prototype.buscar()
    //   resultado = resultados.find((item) => item.id.includes(this.id))
    //   this.idPaciente = resultado.idPaciente
    //   this.motivo = resultado.motivo
    //   this.dataConsulta = resultado.dataConsulta
    //   this.horaConsulta = resultado.horaConsulta
    //   this.descricao = resultado.descricao
    //   this.medicacao = resultado.medicacao
    //   this.precaucoes = resultado.precaucoes
    // } else {
    //   this.controle = "adicionar"
    // }
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
}

