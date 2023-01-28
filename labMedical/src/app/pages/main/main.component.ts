import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';


@Component({
  selector: 'labM-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    let resultados = TabelaUsuarioService.prototype.buscar()
    if (resultados.find((item) => item.logado.includes("true"))) {
      ""
    } else {
      this.route.navigateByUrl("../login")
    }
  }
  constructor(private route: Router) { }
}
