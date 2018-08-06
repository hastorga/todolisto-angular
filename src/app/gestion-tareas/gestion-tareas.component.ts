import { Component, OnInit } from '@angular/core';
import { Tarea, EstadoTarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { Observable, of, empty } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-tareas',
  templateUrl: './gestion-tareas.component.html',
  styleUrls: ['./gestion-tareas.component.css']
})
export class GestionTareasComponent implements OnInit {

  title = 'Todo Listo!';
  estadoTareas = EstadoTarea;
  tareaSeleccionada: Tarea;
  tareas: Array<Tarea>;
  newTarea: any;
  tareasMostradas: Array<Tarea>;


  constructor(public tareaService: TareaService,  private router: Router) {
    this.tareas = [];
    this.newTarea = new Tarea(null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.tareaService.getTareas()
        .subscribe((ts: Array<Tarea>) => {
          this.tareas = ts;
        });
  }

  actualizarTarea(t: any) {
    console.log(`La tarea ${t} fue actualizada!`);

    this.tareaService.updateTarea(t, t.id)
    .subscribe(res => {
        t = res;
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
        console.log("tarea: "+res);

      }, (err) => {
        console.log(err);
      }
    );

  }

  seleccionarTarea(t: Tarea) {
    this.tareaSeleccionada = t;
  }

  crearTarea(newTarea){
    this.newTarea.estado=1;
    this.newTarea.fecha_inicio=null;
    this.newTarea.fecha_termino=null;
    this.tareaService.postTarea(this.newTarea)
    .subscribe(res => {
        this.newTarea = res;
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
        console.log("tarea: "+res);


      }, (err) => {
        console.log(err);
      }

    );

  }
  filtrarTareas() {
   this.tareas.search(t => t.titulo);
}

  estado2str(e: EstadoTarea) {
    switch (e) {
      case EstadoTarea.Creada:    return 'Creada';
      case EstadoTarea.EnProceso: return 'En Proceso';
      case EstadoTarea.Terminada: return 'Terminada';
    }
  }

}
