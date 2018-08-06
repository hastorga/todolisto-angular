import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  url_estados: string = "http://localhost:8000/estados";


  constructor(private http: HttpClient) { }
  
  getEstados()  {
    return this.http.get(`${this.url_estados}`)
  }
}
