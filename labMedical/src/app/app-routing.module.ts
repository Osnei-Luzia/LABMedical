import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: MainComponent },
  { path: "inicio", component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
