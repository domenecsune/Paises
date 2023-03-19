import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-verpais',
  templateUrl: './verpais.component.html',
  styleUrls: ['./verpais.component.css']
})
export class VerpaisComponent implements OnInit {

  pais!:Country;
    

  constructor (
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService          
    ) {}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap (({id}) => this.paisService.getPaisPorCode(id)),
      // tap(console.log)
    )
    .subscribe (pais => this.pais=pais);
    // 
  }



  //   this.activatedRoute.params
  //   .subscribe( ({id}) =>{
  //     console.log(id);

  //     this.paisService.getPaisPorCode (id)
  //     .subscribe(pais =>{
  //       console.log(pais);
  //     })
  //   })
  // }

}
