import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShellComponent, 
    MainContentComponent, // no exportamos, se usa solo dentro de shell.
    TopBarComponent // no exportamos, se usa solo dentro de shell.
  ]
})
export class CoreModule { }
