import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PorpaisComponent } from './page/porpais/porpais.component';
import { PorcapitalComponent } from './page/porcapital/porcapital.component';
import { PorregionComponent } from './page/porregion/porregion.component';
import { VerpaisComponent } from './page/verpais/verpais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';




@NgModule({
  declarations: [
    PorpaisComponent,
    PorcapitalComponent,
    PorregionComponent,
    VerpaisComponent,
    TablaPaisComponent,
    PaisInputComponent,
    
  ],
  exports: [
    PorpaisComponent,
    PorregionComponent,
    VerpaisComponent,
    TablaPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
