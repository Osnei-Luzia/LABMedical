import { Component } from '@angular/core';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';
import { TabelaConsultaService } from 'src/app/services/tabela-consulta.service';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';

@Component({
  selector: 'labM-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  recebedorEvento(pacientes:any){
    this.pacientes = pacientes
  }
  pacientes: any = TabelaPacienteService.prototype.buscar()
  estatisticas =
    [{
      nome: "Pacientes",
      quantidade: TabelaPacienteService.prototype.buscar().length,
      img: "../../../assets/Sem título.png", //icon path
    },
    {
      nome: "Consultas",
      quantidade: TabelaConsultaService.prototype.buscar().length,
      img: "../../../assets/Sem título.png",
    },
    {
      nome: "Exames",
      quantidade: TabelaExameService.prototype.buscar().length,
      img: "../../../assets/Sem título.png"
    }]
}