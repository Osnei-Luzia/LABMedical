import { Component } from '@angular/core';

@Component({
  selector: 'labM-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  estatisticas =
    [{
      nome: "Pacientes",
      quantidade: 0, //busca pacientes
      img: "../../../assets/Sem título.png", //icon path
    },
    {
      nome: "Consultas",
      quantidade: 0,
      img: "../../../assets/Sem título.png",
    },
    {
      nome: "Exames",
      quantidade: 0,
      img: "../../../assets/Sem título.png"
    }]
}