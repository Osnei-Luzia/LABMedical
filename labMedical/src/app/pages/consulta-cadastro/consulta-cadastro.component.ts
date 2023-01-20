import { Component } from '@angular/core';

@Component({
  selector: 'labM-consulta-cadastro',
  templateUrl: './consulta-cadastro.component.html',
  styleUrls: ['./consulta-cadastro.component.css']
})
export class ConsultaCadastroComponent {
  motivo: String = "";
  dataConsulta: String = ""
  //$("dataConsulta").datepicker("setDate", new Date().getFullYear()) ---- Instalar JQuery e setar default para o datePicker
  horaConsulta: String = "";
  //buscar hora atual
  descricao: String = "";
  medicacao: String = "";
  precaucoes: String = "";
  onSubmit(form: any) {

  }
}
