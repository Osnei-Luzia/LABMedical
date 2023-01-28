import { Component } from '@angular/core';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';

@Component({
  selector: 'labM-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  logout(){
    let resultados = TabelaUsuarioService.prototype.buscar()
    let resultado = resultados.find((item) => item.logado.includes("true"))
    resultado.logado = ""
    TabelaUsuarioService.prototype.cadastrar(resultado)
  }
}
