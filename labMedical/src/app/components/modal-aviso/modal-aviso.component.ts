import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalMensagem } from 'src/app/services/modal-mensagem.service';

@Component({
  selector: 'labM-modal-aviso',
  templateUrl: './modal-aviso.component.html',
  styleUrls: ['./modal-aviso.component.css']
})
export class ModalAvisoComponent {
  modalRef: BsModalRef
  texto: any = {
    pagina: this.mensagem.pagina,
    acao: this.mensagem.acao
  }
  
  constructor(private ref: BsModalRef, private mensagem: ModalMensagem) {
    this.modalRef = ref
  }
  
}
