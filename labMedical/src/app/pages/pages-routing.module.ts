import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProntuarioListaComponent } from './prontuario-lista/prontuario-lista.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { ConsultaCadastroComponent } from './consulta-cadastro/consulta-cadastro.component';
import { ExameCadastroComponent } from './exame-cadastro/exame-cadastro.component';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent, },
  { path: "prontuarios", component: ProntuarioListaComponent },
  { path: "prontuario/:id", component: ProntuarioComponent },
  { path: 'paciente', component: PacienteCadastroComponent, },
  { path: 'paciente/:id', component: PacienteCadastroComponent, },
  { path: "consulta", component: ConsultaCadastroComponent, },
  { path: "consulta/:id", component: ConsultaCadastroComponent, },
  { path: "exame", component: ExameCadastroComponent },
  { path: "exame/:id", component: ExameCadastroComponent },
]


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesRoutingModule { }
