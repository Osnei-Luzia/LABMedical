import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';


@Component({
  selector: 'labM-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loading: any = ""

  ngOnInit(): void {
    let resultados = TabelaUsuarioService.prototype.buscar()
    if (resultados.find((item) => item.logado.includes("true"))) {
      ""
    } else {
      this.route.navigateByUrl("../login")
    }
  }
  recebedorEvento(event:any){
    this.loading = event
    setTimeout(()=>{this.loading = false}, 1000)
  }
  constructor(private route: Router) { }
}