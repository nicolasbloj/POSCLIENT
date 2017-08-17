import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SaleDocumentComponent } from './sale-document.component';

const routes: Routes = [
        {
             path: '',
             component: SaleDocumentComponent
        }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes) //
    ],
    exports: [
        RouterModule
    ]
})
export class SaleDocumentRoutingModule {}
