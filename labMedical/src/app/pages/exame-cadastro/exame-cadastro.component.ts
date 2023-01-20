import { Component } from '@angular/core';

@Component({
  selector: 'labM-exame-cadastro',
  templateUrl: './exame-cadastro.component.html',
  styleUrls: ['./exame-cadastro.component.css']
})
export class ExameCadastroComponent {
  date: any = new Date()
  exame: String = ""
  dataExame: String = ""
  horaExame: String = `${this.date.getHours()}:${this.date.getMinutes()}`
  tipo: String = ""
  laboratorio: String = ""
  url: String = ""
  resultado: String = ""
  onSubmit(form: any) {

  }

}
