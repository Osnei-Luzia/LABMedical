import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';

@Component({
  selector: 'labM-exame-cadastro',
  templateUrl: './exame-cadastro.component.html',
  styleUrls: ['./exame-cadastro.component.css']
})
export class ExameCadastroComponent {
  date: Date = new Date()
  controle: String = "adicionar"
  pacientes: any = TabelaPacienteService.prototype.buscar()

  idPaciente: any = ""
  nomeExame: String = ""
  dataExame: String = ""
  horaExame: String = `${this.date.getHours()}:${this.date.getMinutes()}`
  tipo: String = ""
  laboratorio: String = ""
  url: String = ""
  resultados: String = ""
  onSubmit(form: any) {
    if (form.valid) {
      this.adicionar()
      form.reset()
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
      id: "",
      idPaciente: this.idPaciente,
      nomeExame: this.nomeExame,
      dataExame: this.dataExame,
      horaExame: this.horaExame,
      tipo: this.tipo,
      laboratorio: this.laboratorio,
      url: this.url,
      //resultado: this.resultado,
      resultados: this.resultados
    }
    return exame
  }
}
