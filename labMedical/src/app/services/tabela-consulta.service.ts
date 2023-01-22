import { Injectable } from '@angular/core';
import { Consulta } from '../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class TabelaConsultaService {
  cadastrar(data: Consulta) {
    data.id = crypto.randomUUID()
    // eliminar nulls
    localStorage.setItem(`consulta_${data.id}`, JSON.stringify(data))
  }
  buscar() {
    const chaves = Object.keys(localStorage).filter((items) => { return items.includes("consulta") })
    let storage: any[] = []
    Object.values(chaves).forEach((chave, Index) => {
      storage.push(localStorage.getItem(chave))
      storage[Index] = JSON.parse(storage[Index])
    })
    return storage
  }
  constructor() { }
}
