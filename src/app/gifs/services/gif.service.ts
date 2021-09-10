import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey:string = 'd0f6bkwAhem7MECO3hpIlqe9qrdtGYnn';
  private servicioURL:string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor(private http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')) || [];
  }

  get getHistorial():string[]{
    return [...this._historial];
  }

  set setHistorial(query:string){
    query = query.trim().toLowerCase();
    if(query.length > 0 && !this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      this.search(query);
      localStorage.setItem('historial',JSON.stringify(this._historial))
    }    
  }

  public search(query:string){
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',query)
    this.http.get<SearchGIFResponse>(`${this.servicioURL}/search`,{params})
    .subscribe(resp => {
      this.resultados = resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados))
    })
  }
}
