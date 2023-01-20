import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'labM-exame-cadastro',
  templateUrl: './exame-cadastro.component.html',
  styleUrls: ['./exame-cadastro.component.css']
})
export class ExameCadastroComponent implements DoCheck{
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
  ngDoCheck(): void {
    this.horaExame = `${this.date.getHours()}:${this.date.getMinutes()}`
  }
}
