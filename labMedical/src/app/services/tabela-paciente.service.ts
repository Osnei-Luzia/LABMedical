import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';
import { TabelaConsultaService } from './tabela-consulta.service';
import { TabelaExameService } from './tabela-exame.service';

@Injectable({
  providedIn: 'root'
})
export class TabelaPacienteService {
  cadastrar(data: Paciente) {
    data.id ? "" : data.id = crypto.randomUUID();

    Object.values(data).forEach(element => {
      element === null ?
        element = "" : ""
    });
    localStorage.setItem(`paciente_${data.id}`, JSON.stringify(data))
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
  deletar(id: String): false|true {
    let resultados = TabelaConsultaService.prototype.buscar()
    let resultado = resultados.find((item) => item.idPaciente.includes(id))
    if (resultado) {
      alert("O paciente ainda possui consultas cadastradas")
      return false
    }
    resultados = TabelaExameService.prototype.buscar()
    resultado = resultados.find((item) => item.idPaciente.includes(id))
    if (resultado) {
      alert("O paciente ainda possui exames cadastrados")
      return false
    }
    resultados = this.buscar()
    resultado = resultados.find((item) => item.id.includes(id))
    localStorage.removeItem(`paciente_${resultado.id}`)
    return true
  }
  constructor() { }
}