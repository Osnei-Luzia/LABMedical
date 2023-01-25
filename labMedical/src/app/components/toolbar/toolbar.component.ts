import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';


@Component({
  selector: 'labM-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  nomePagina: String | undefined

  ngOnInit(): void {
  this.setNomePagina(this.rota.url)
  }  
  
  setNomePagina(url:any): void {
    switch (url.split("/")[2]) {
      case "inicio":
        this.nomePagina = "Estatísticas"
        break;
      case "paciente":
        this.nomePagina = "Cadastro de Pacientes"
        break;
      case "consulta":
        this.nomePagina = "Cadastro de Consultas"
        break;
      case "exame":
        this.nomePagina = "Cadastro de Exames"
        break;
      case "prontuarios":
        this.nomePagina = "Prontuário"
        break;
    }
  }
  constructor(private rota: Router) {
    rota.events.subscribe((event)=>{
      if(event instanceof ResolveEnd){
        this.setNomePagina(event.url)
      }
    })
  }
}

// /home/paciente/52d65164-fa64-46e6-ab05-9e13f4c7c64e
