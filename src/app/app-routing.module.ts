import {NgModule} from  '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PorcapitalComponent } from './pais/page/porcapital/porcapital.component';
import { PorpaisComponent } from './pais/page/porpais/porpais.component';
import { PorregionComponent } from './pais/page/porregion/porregion.component';
import { VerpaisComponent } from './pais/page/verpais/verpais.component';

const routes: Routes = [
    {
        path:'',
        component: PorpaisComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component:PorregionComponent
    },
    {
        path:'capital',
        component:PorcapitalComponent
    },
    {
        path:'pais/:id',
        component:VerpaisComponent
    },
    {
        path:'**',
        redirectTo:''
    },
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)   
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}



