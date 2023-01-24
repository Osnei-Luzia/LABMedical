import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCadastroComponent } from './pages/consulta-cadastro/consulta-cadastro.component';
import { ExameCadastroComponent } from './pages/exame-cadastro/exame-cadastro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { PacienteCadastroComponent } from './pages/paciente-cadastro/paciente-cadastro.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProntuarioListaComponent } from './pages/prontuario-lista/prontuario-lista.component';
import { ProntuarioComponent } from './pages/prontuario/prontuario.component';

//ter mais de um routing.module?
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "home", component: MainComponent,
    children: [
      {
        path: "inicio", component: InicioComponent,
      }, {
        path: 'paciente', component: PacienteCadastroComponent,
      }, {
        path: 'paciente/:id', component: PacienteCadastroComponent,
      }, {
        path: "consulta", component: ConsultaCadastroComponent,
      }, {
        path: "consulta/:id", component: ConsultaCadastroComponent,
      }, {
        path: "exame", component: ExameCadastroComponent
      }, {
        path: "exame/:id", component: ExameCadastroComponent
      }, {
        path: "prontuarios", component: ProntuarioListaComponent
      }, {
        path: "prontuario/:id", component: ProntuarioComponent
      }
    ] //corrigir paths
  },
  { path: '**', component: PaginaNaoEncontradaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
