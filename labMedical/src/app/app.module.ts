import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { MatchingPasswordDirective } from './directives/matching-password.directive';
import { AvailableEmailDirective } from './directives/available-email.directive';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MainComponent } from './pages/main/main.component';
import { idadePipe } from './pipes/idade-pipe.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PacienteCadastroComponent } from './pages/paciente-cadastro/paciente-cadastro.component';
import { ConsultaCadastroComponent } from './pages/consulta-cadastro/consulta-cadastro.component';
import { ExameCadastroComponent } from './pages/exame-cadastro/exame-cadastro.component';
import { PacienteCardComponent } from './components/paciente-card/paciente-card.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { ProntuarioListaComponent } from './pages/prontuario-lista/prontuario-lista.component';
import { ProntuarioTableComponent } from './components/prontuario-table/prontuario-table.component';
import { ProntuarioComponent } from './pages/prontuario/prontuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LoginCadastroComponent,
    MatchingPasswordDirective,
    AvailableEmailDirective,
    InicioComponent,
    MainComponent,
    idadePipe,
    ToolbarComponent,
    SideMenuComponent,
    PacienteCadastroComponent,
    ConsultaCadastroComponent,
    ExameCadastroComponent,
    PacienteCardComponent,
    PaginaNaoEncontradaComponent,
    BarraPesquisaComponent,
    ProntuarioListaComponent,
    ProntuarioTableComponent,
    ProntuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
