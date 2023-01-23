import { Injectable } from '@angular/core';

@Injectable()

export class Constants {
    VIACEP_API: string = "" 
    constructor(cep: String) {
        this.VIACEP_API = `https://viacep.com.br/ws/${cep}/json/`;
    }
} 

