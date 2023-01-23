import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'labM-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrls: ['./pagina-nao-encontrada.component.css']
})
export class PaginaNaoEncontradaComponent implements OnInit{
  number: number=5
  ngOnInit(): void {
    // let interval
    // interval = setInterval(()=>{this.number--},1000)
    // this.number==0?clearInterval(interval):""
    // setTimeout(()=>{this.route.navigateByUrl("")},5000)    
  }
  constructor(private route:Router){

  }
}
