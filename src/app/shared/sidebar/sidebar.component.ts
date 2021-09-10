import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private gifsService:GifService) { }
  
  get historial(){
    return this.gifsService.getHistorial
  }

  buscar(query:string){
    this.gifsService.search(query);
  }

}
