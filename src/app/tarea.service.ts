import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of, empty } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url_tareas: string = "http://localhost:8000/tareas/";


  constructor(private http: HttpClient) { }


  getTareas()  {
    return this.http.get(`${this.url_tareas}`)
  }

  // crearTarea(tarea: Object) {
  //   return this.http.post(`${this.url_tareas}`, tarea)
  // }

  updateTarea(tarea: Tarea, id: number) {
    return this.http.put(`${this.url_tareas}${id}/`, tarea)
  }

  deleteOrganizacion(id: String) {
    return this.http.delete(`${this.url_tareas}`)
  }

  postTarea(tarea: Tarea) {
    location.reload();
    return this.http.post(`${this.url_tareas}`, tarea)
  }






}
