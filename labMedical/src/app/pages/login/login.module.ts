import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginCadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule
  ],
  exports:[
    LoginComponent,
    LoginFormComponent,
    LoginCadastroComponent,
  ]
})
export class LoginModule { }
