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

  getTareas(): Observable<any>  {
    return this.http.get<Array<any>>(this.url_tareas);
  }

  updateTarea(tarea: Tarea, id: number) {
    return this.http.put(`${this.url_tareas}${id}/`, tarea)
  }

  deleteTarea(id: String) {
    return this.http.delete(`${this.url_tareas}${id}/`)

  }

  postTarea(tarea: Tarea) {
    return this.http.post(`${this.url_tareas}`, tarea)

  }






}
