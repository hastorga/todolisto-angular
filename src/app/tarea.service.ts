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

  updateOrganizacion(organizacion: Object, id: String) {
    return this.http.put(`${this.url_tareas}`, organizacion)
  }

  deleteOrganizacion(id: String) {
    return this.http.delete(`${this.url_tareas}`)
  }

  postTarea(tarea: Tarea) {
    return this.http.post(`${this.url_tareas}`, tarea)
  }



 


}
