import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelaConsultaService } from 'src/app/services/tabela-consulta.service';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';
import { TabelaPacienteService } from 'src/app/services/tabela-paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { Consulta } from 'src/app/models/consulta';
import { Exame } from 'src/app/models/exame';

@Component({
  selector: 'labM-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css']
})
export class ProntuarioComponent implements OnInit {
  id: any = ""
  paciente: Paciente | undefined
  consultas: Consulta[] | undefined
  exames: Exame[] | undefined
  ngOnInit(): void {

  }
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    let resultados = TabelaPacienteService.prototype.buscar()
    this.paciente = resultados.find((item) => item.id.includes(this.id))
    resultados = TabelaConsultaService.prototype.buscar()
    resultados = resultados.filter((item) => item.idPaciente.includes(this.id))
    this.consultas = resultados.sort((itemA, itemB) => {
      let data1: Date = new Date(itemA.dataConsulta)
      let data2: Date = new Date(itemB.dataConsulta)
      return data1.getTime() - data2.getTime()
    })

    resultados = TabelaExameService.prototype.buscar()
    resultados = resultados.filter((item) => item.idPaciente.includes(this.id))
    this.exames = resultados.sort((itemA, itemB) => {
      let data1: Date = new Date(itemA.dataExame)
      let data2: Date = new Date(itemB.dataExame)
      return data1.getTime() - data2.getTime()
    })
  }
}
