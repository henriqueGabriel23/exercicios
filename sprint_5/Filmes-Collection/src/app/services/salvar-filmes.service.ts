import { Injectable } from '@angular/core';
import { CriarFilmes } from '../models/salvar-usuarios.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SalvarFilmesService {
  private listaFilmes!:CriarFilmes[]
  private url = 'http://localhost:3000/filmes'
  constructor(private httpClient:HttpClient) {
    this.listaFilmes = [];
   }
   get Filmes(){
    return this.listaFilmes
   }
   lerFilmes():Observable<CriarFilmes[]>{
    return this.httpClient.get<CriarFilmes[]>(`${this.url}?_expand=genero`)
   }
   salvarFilmes(filmes:CriarFilmes):Observable<CriarFilmes[]>{
    return this.httpClient.post<CriarFilmes[]>(this.url, filmes);
   }
   editarFilmes(Filmes:CriarFilmes):Observable<CriarFilmes[]>{
    return this.httpClient.put<CriarFilmes[]>(`${this.url}/${Filmes.id}`,Filmes);
   }
   deleteFilmes(idFilmes:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${idFilmes}`);
 }
  
}
