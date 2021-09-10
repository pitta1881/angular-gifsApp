import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent {

  constructor(private gifsService:GifService) { }

  get resultados(){
    return this.gifsService.resultados;
  }
}
