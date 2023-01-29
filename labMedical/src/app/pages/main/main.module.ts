import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './main.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ToolbarComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    MainComponent,
    ToolbarComponent,
    SideMenuComponent,
  ]
})
export class MainModule { }
