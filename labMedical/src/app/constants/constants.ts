import { Injectable } from '@angular/core';

@Injectable()

export class Constants {
    cep: String = ""
    public readonly VIACEP_API: string = `viacep.com.br/ws/${this.cep}/json/`;
} 