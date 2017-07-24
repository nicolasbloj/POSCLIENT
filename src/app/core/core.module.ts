import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { CoreRoutingModule } from "./core-routing.module";


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers:[],
  declarations: [
    ShellComponent, 
    MainContentComponent, // no exportamos, se usa solo dentro de shell.
    TopBarComponent // no exportamos, se usa solo dentro de shell.
  ]/*,
  exports: [ShellComponent]*/
  
})
export class CoreModule { }
