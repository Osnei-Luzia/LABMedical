import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PacienteCardComponent } from './inicio/components/paciente-card/paciente-card.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProntuarioTableComponent } from './prontuario-lista/components/prontuario-table/prontuario-table.component';
import { ProntuarioListaComponent } from './prontuario-lista/prontuario-lista.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { CadastrosModule } from './cadastros.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
    PacienteCardComponent,
    PaginaNaoEncontradaComponent,
    ProntuarioListaComponent,
    ProntuarioTableComponent,
    ProntuarioComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DirectivesModule,
    PipesModule,
    MainModule,
    CadastrosModule,
    LoginModule,
    PagesRoutingModule
  ],
  exports: [
    InicioComponent,
    PacienteCardComponent,
    PaginaNaoEncontradaComponent,
    ProntuarioListaComponent,
    ProntuarioTableComponent,
    ProntuarioComponent,
  ]
})
export class PagesModule { }
