import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAvisoComponent } from './shared/modal-aviso/modal-aviso.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalAvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ModalModule.forRoot(),
    
  ],
  exports:[
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
