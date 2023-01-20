import { Component } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { TabelaConsultaService } from 'src/app/services/tabela-consulta.service';

@Component({
  selector: 'labM-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent {
  date: Date = new Date()
  motivo: String = "";
  dataConsulta: String = ""
  //$("dataConsulta").datepicker("setDate", new Date().getFullYear()) ---- Instalar JQuery e setar default para o datePicker
  horaConsulta: String = `${this.date.getHours()}:${this.date.getMinutes()}`;
  //buscar hora atual
  descricao: String = "";
  medicacao: String = "";
  precaucoes: String = "";
  onSubmit(form: any) {
    if (form.valid) {
      let consulta: Consulta = {
        id: "",
        motivo: this.motivo,
        dataConsulta: this.dataConsulta,
        horaConsulta: this.horaConsulta,
        descricao: this.descricao,
        medicacao: this.medicacao,
        precaucoes: this.precaucoes,
      }
      TabelaConsultaService.prototype.cadastrar(consulta)
      console.log(TabelaConsultaService.prototype.buscar())
      form.reset()
    }
  }
}
