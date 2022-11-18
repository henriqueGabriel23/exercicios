import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriarGenero } from '../models/salvar-usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class SalvarGeneroService {
  private listaGeneros!:CriarGenero[]
  private url = 'http://localhost:3000/generos'
  constructor(private httpClient:HttpClient) {
    this.listaGeneros = [];
   }
   get Generos(){
    return this.listaGeneros
   }
   lerGenero():Observable<CriarGenero[]>{
    return this.httpClient.get<CriarGenero[]>(this.url)
   }
   salvarGenero(genero:CriarGenero):Observable<CriarGenero[]>{
    return this.httpClient.post<CriarGenero[]>(this.url, genero);
   }
   editarGenero(Genero:CriarGenero):Observable<CriarGenero[]>{
    return this.httpClient.put<CriarGenero[]>(`${this.url}/${Genero.id}`,Genero);
   }
   deleteGenero(idGenero:any):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${idGenero}`);
 }
  
}

