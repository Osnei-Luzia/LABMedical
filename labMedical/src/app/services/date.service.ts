import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  horarioAtual(){
    let date = new Date()
    let horaAtual = date.getHours().toString().length==1?`0${date.getHours()}`:date.getHours()
    let minutoAtual = date.getMinutes().toString().length==1?`0${date.getMinutes()}`:date.getMinutes()
    let resultado = `${horaAtual}:${minutoAtual}`
    return resultado
  }
  dataAtual(){
    let date = new Date()
    let mesAtual = (date.getMonth()+1).toString().length==1?`0${date.getMonth()+1}`:date.getMonth()+1
    let diaAtual = (date.getDate()).toString().length==1?`0${date.getDate()}`:date.getDate()
    let resultado = `${date.getFullYear()}-${mesAtual}-${diaAtual}`
    return resultado
  }
  constructor() { }
}
