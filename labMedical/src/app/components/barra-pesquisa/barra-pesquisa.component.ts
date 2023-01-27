import { Component, EventEmitter, Output } from '@angular/core';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';

@Component({
  selector: 'labM-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})

export class BarraPesquisaComponent {
  @Output() listaPacientes: EventEmitter<any> = new EventEmitter()
  pesquisa: String = ""
  //pacientes: any = TabelaPacienteService.prototype.buscar()
  filtrar() {
    let resultados = TabelaPacienteService.prototype.buscar()
    let resultado = resultados.filter((item) => item.nome.toLowerCase().includes(this.pesquisa.toLowerCase()))
    if (resultado.length < 1) {
      resultado = resultados.filter((item) => item.email.includes(this.pesquisa))
    }
    if (resultado.length < 1) {
      resultado = resultados.filter((item) => item.telefone.includes(this.pesquisa))
    }
    this.listaPacientes.emit(resultado)
  }
}