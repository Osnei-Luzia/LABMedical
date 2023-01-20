import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';

@Component({
  selector: 'labM-exame-cadastro',
  templateUrl: './exame-cadastro.component.html',
  styleUrls: ['./exame-cadastro.component.css']
})
export class ExameCadastroComponent {
  date: Date = new Date()
  nomeExame: String = ""
  dataExame: String = ""
  horaExame: String = `${this.date.getHours()}:${this.date.getMinutes()}`
  tipo: String = ""
  laboratorio: String = ""
  url: String = ""
  resultados: String = ""
  onSubmit(form: any) {
    if (form.valid) {
      let exame: Exame = {
        id: "",
        nomeExame: this.nomeExame,
        dataExame: this.dataExame,
        horaExame: this.horaExame,
        tipo: this.tipo,
        laboratorio: this.laboratorio,
        url: this.url,
        //resultado: this.resultado,
        resultados: this.resultados
      }
      TabelaExameService.prototype.cadastrar(exame)
      console.log(TabelaExameService.prototype.buscar())
      form.reset()
    }
  }
}
