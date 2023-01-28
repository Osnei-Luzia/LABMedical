import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TabelaUsuarioService } from '../services/tabela-usuario.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  resultados = TabelaUsuarioService.prototype.buscar()
  resultado = this.resultados.find((item) => item.logado.includes("true"))
  user: Usuario = this.resultado

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.user){
        return true;
      }else{
        alert("Num foi")
        return false;
      }
  }
  
}
