import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class TabelaUsuarioService {
  cadastrar(data: Usuario) {
    data.id ? "" : data.id = crypto.randomUUID();
    localStorage.setItem(`usuario_${data.id}`, JSON.stringify(data))
  }
  buscar() {
    const chaves = Object.keys(localStorage).filter((items) => { return items.includes("usuario") })
    let storage: any[] = []
    Object.values(chaves).forEach((chave, Index) => {
      storage.push(localStorage.getItem(chave))
      storage[Index] = JSON.parse(storage[Index])
    })
    return storage
  }
  constructor() { }
}
