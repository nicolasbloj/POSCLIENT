import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpisComponent } from './kpis.component';
import { KpisRoutingModule } from './kpis-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    KpisRoutingModule,
    ChartsModule
  ],
  declarations: [KpisComponent]
})
export class KpisModule { }
