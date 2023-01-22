import { Component, Input } from '@angular/core';

@Component({
  selector: 'labM-paciente-card',
  templateUrl: './paciente-card.component.html',
  styleUrls: ['./paciente-card.component.css']
})

export class PacienteCardComponent {
  @Input() paciente: any
}
