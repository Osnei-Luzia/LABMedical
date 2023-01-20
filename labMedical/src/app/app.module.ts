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
import { CaptalizeFirstPipe } from './pipes/captalize-first.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PacienteCadastroComponent } from './pages/paciente-cadastro/paciente-cadastro.component';
import { ConsultaCadastroComponent } from './pages/consulta-cadastro/consulta-cadastro.component';
import { ExameCadastroComponent } from './pages/exame-cadastro/exame-cadastro.component';

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
    CaptalizeFirstPipe,
    ToolbarComponent,
    SideMenuComponent,
    PacienteCadastroComponent,
    ConsultaCadastroComponent,
    ExameCadastroComponent
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
