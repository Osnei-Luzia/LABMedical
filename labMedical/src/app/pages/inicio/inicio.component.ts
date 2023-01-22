import { Component } from '@angular/core';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';
import { TabelaConsultaService } from 'src/app/services/tabela-consulta.service';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'labM-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  pesquisa: String = ""
  pacientes: any = TabelaPacienteService.prototype.buscar()
  filtrar() {
    let resultados = TabelaPacienteService.prototype.buscar()
    let resultado = resultados.filter((item) => item.nome.includes(this.pesquisa))
    if (resultado.length < 1) {
      resultado = resultados.filter((item) => item.email.includes(this.pesquisa))
    }
    if (resultado.length < 1) {
      resultado = resultados.filter((item) => item.telefone.includes(this.pesquisa))
    }
    //formatação de Telefone
    this.pacientes = resultado
  }
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