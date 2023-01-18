import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizeFirst'
})
export class CaptalizeFirstPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string[] {
    value = value.split(" ");
    // const retorno = value.map((palavra: any) =>
    //   palavra = palavra[0].toUpperCase() + palavra.substr(1))
    value.forEach((palavra: string, index: number) => {
      value[index] = palavra[0].toUpperCase() + palavra.substring(1);
    });
    // for (let cont = 0; cont < value.length; cont++) {
    //   value[cont] = value[cont][0].toUpperCase() + value[cont].substr(1);
    // }
    return value.join(" ");
  }
}