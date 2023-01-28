import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalAvisoComponent } from '../shared/modal-aviso/modal-aviso.component';

@Injectable({
  providedIn: 'root'
})

export class ModalMensagem {
  pagina: String = ""
  acao: String = ""
  chamarModal(pagina:String,acao:String){
    this.pagina = pagina
    this.acao = acao
    this.modalService.show(ModalAvisoComponent)
  }


  constructor(private modalService: BsModalService,) {
    
  }
}
