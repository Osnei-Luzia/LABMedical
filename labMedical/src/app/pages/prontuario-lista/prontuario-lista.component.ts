import { Component } from '@angular/core';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';

@Component({
  selector: 'labM-prontuario-lista',
  templateUrl: './prontuario-lista.component.html',
  styleUrls: ['./prontuario-lista.component.css']
})
export class ProntuarioListaComponent {
  recebedorEvento(pacientes: any) {
    this.pacientes = pacientes
  }
  pacientes: any = TabelaPacienteService.prototype.buscar()

}
