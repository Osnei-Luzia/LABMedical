import { Component, Input } from '@angular/core';

@Component({
  selector: 'labM-prontuario-table',
  templateUrl: './prontuario-table.component.html',
  styleUrls: ['./prontuario-table.component.css']
})
export class ProntuarioTableComponent {
  @Input() pacientes: any

  
}
