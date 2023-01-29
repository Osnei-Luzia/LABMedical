import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { idadePipe } from './idade-pipe.pipe';

@NgModule({
  declarations: [
    idadePipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    idadePipe,
  ]
})
export class PipesModule { }
