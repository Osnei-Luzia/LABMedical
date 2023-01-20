import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class TabelaPacienteService {
  cadastrar(data: Paciente) {
    data.id = crypto.randomUUID()
    localStorage.setItem(`paciente${data.id}`, JSON.stringify(data))

  }
  buscar() {
    const chaves = Object.keys(localStorage).filter((items) => { return items.includes("paciente") })
    let storage: any[] = []
    Object.values(chaves).forEach((chave, Index) => {
      storage.push(localStorage.getItem(chave))
      storage[Index] = JSON.parse(storage[Index])
    })
    return storage
  }
  constructor() { }
}