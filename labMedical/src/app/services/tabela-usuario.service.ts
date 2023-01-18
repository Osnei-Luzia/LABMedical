import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class TabelaUsuarioService {
  cadastrar(data: Usuario) {
    //localStorage.setItem("usuario0", JSON.stringify({ id: "vazio", nome: "vazio", email: "vazio", senha: "vazio" }))
    /*
    const storage = Object.keys(localStorage).filter((items) => { return items.includes("usuario") })
    let usuarioKey = {
      nome: "usuario",
      posicao: 1
    }
    checar se storage.item == usuario nome+posicao, posicao++
    */
    data.id = crypto.randomUUID()
    localStorage.setItem(`usuario${data.id}`, JSON.stringify(data))

    // {usuario1, Nome, Email, Senha},{exame3, Paciente, Treco, Negocio},{consulta2....}
    // usuario1, exame3, consulta2, usuario2
    // usuario0, usuario1

  }
  buscar() {
    const chaves = Object.keys(localStorage).filter((items) => { return items.includes("usuario") })
    let storage: any[] = []
    Object.values(chaves).forEach((chave, Index) => {
      storage.push(localStorage.getItem(chave))
      storage[Index] = JSON.parse(storage[Index])
    })
    return storage
    //Object.values(storage).forEach((usuario) => { usuario.email == email ? console.log(usuario.email) : "" })
  }
  constructor() { }
}
