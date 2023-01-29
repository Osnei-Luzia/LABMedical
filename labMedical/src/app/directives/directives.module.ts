import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableEmailDirective } from './available-email.directive';
import { MatchingPasswordDirective } from './matching-password.directive';



@NgModule({
  declarations: [
    MatchingPasswordDirective,
    AvailableEmailDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatchingPasswordDirective,
    AvailableEmailDirective,
  ]
})
export class DirectivesModule { }
