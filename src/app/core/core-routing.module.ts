import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './../home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: '../about/about.module#AboutModule'
    },
    {
        path: 'products',
        loadChildren: '../products/products.module#ProductsModule'
    },
    {
        path: 'clients',
        loadChildren: '../clients/clients.module#ClientsModule'
    },
    {
        path: 'sale',
        loadChildren: '../sale-document/sale-document.module#SaleDocumentModule'
    },
    {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes) // configuración para el módulo raíz
        // RouterModule tambien nos servira para routerLink en main-content
    ],
    exports: [
        RouterModule // se importará desde el módulo padre
    ]
})
export class CoreRoutingModule { }
