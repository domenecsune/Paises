import { Component,Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  // styleUrls: ['./tabla-pais.component.css']
})
export class TablaPaisComponent {

  @Input() paises: Country []=[];

}
