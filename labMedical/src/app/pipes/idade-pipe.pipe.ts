import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade'
})
export class idadePipe implements PipeTransform {

  transform(value: any): number {
    return Math.floor((Date.now() - new Date(value).getTime()) / 31557600000)
  }
}