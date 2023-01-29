import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraPesquisaComponent } from '../shared/barra-pesquisa/barra-pesquisa.component';
import { ConsultaCadastroComponent } from './consulta-cadastro/consulta-cadastro.component';
import { ExameCadastroComponent } from './exame-cadastro/exame-cadastro.component';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BarraPesquisaComponent,
    PacienteCadastroComponent,
    ConsultaCadastroComponent,
    ExameCadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BarraPesquisaComponent,
    PacienteCadastroComponent,
    ConsultaCadastroComponent,
    ExameCadastroComponent,
  ]
})
export class CadastrosModule { }
