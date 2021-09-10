import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  //lo siguiente se podria hacer con ngmodel pero no conviene importar todo el modulo FormsModule por solo un input.
  //lo siguiente tambien se podria hacer con document.querySelector(blabla) pero no es recomendable.
  //lo siguiente si se hiciera con ngmodel, solo obtendriamos el value, pero en este caso, obtenemos todo el input con sus propiedades
  @ViewChild('txtBuscar') txtBuscar:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifService){}

  buscar(){
    const item:string = this.txtBuscar.nativeElement.value; 
    this.gifsService.setHistorial = item
    this.txtBuscar.nativeElement.value = '';
  }

}
