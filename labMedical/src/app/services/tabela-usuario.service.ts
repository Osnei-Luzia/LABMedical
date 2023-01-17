import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class TabelaUsuarioService {
  cadastrar(data: Usuario) {
    localStorage.setItem("usuario0", "vazio")
    const storage = Object.keys(localStorage).filter((items) => { items.includes("usuario") })
    data.id = crypto.randomUUID()
    localStorage.setItem(`usuario${storage.length}`, JSON.stringify(data))

    // {usuario1, Nome, Email, Senha},{exame3, Paciente, Treco, Negocio},{consulta2....}
    // usuario1, exame3, consulta2, usuario2
    // usuario0, usuario1

  }
  buscar() {
    const chaves = Object.keys(localStorage).filter((items) => { items.includes("usuario") })
    let storage: any
    chaves.forEach((chave) => { storage.push(localStorage.getItem(chave)) })
    storage.find((item: any) => { item.email == "emailDoCara" })
  }
  constructor() { }
}
