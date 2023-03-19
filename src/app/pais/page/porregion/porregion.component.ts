import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porregion',
  templateUrl: './porregion.component.html',
  styles: [`
    button{
      margin-right:5px;
    }


  `
  ]

})
export class PorregionComponent {

  regiones: string[]=[ 'EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  regionActiva ='';
  paises: Country[]=[];
  
  constructor(private paisService: PaisService){}

  getClaseCSS (region:string):string{
    return (region === this.regionActiva) 
              ? 'btn btn-primary' 
              :'btn btn-outline-primary';
  }

  activarRegion(region:string){

    if(region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.paises =[];

    this.paisService.buscarRegion(region)
    .subscribe(paises => this.paises=paises);
  }
}
