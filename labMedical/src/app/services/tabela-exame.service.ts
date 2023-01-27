import { Injectable } from '@angular/core';
import { Exame } from '../models/exame';

@Injectable({
  providedIn: 'root'
})
export class TabelaExameService {
  cadastrar(data: Exame) {
    data.id ? "" : data.id = crypto.randomUUID();

    Object.values(data).forEach(element => {
      element === null ?
        element = "" : ""
    });
    localStorage.setItem(`exame_${data.id}`, JSON.stringify(data))
  }
  buscar() {
    const chaves = Object.keys(localStorage).filter((items) => { return items.includes("exame") })
    let storage: any[] = []
    Object.values(chaves).forEach((chave, Index) => {
      storage.push(localStorage.getItem(chave))
      storage[Index] = JSON.parse(storage[Index])
    })
    return storage
  }
  deletar(id: String) {
    let resultados = this.buscar()
    let resultado = resultados.find((item) => item.id.includes(id))
    localStorage.removeItem(`exame_${resultado.id}`)
  }
  constructor() { }
}
