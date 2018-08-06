import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  
  }


}































/*
export class AppComponent implements OnInit {
  title = 'Todo Listo!';
  estadoTareas = EstadoTarea;
  tareaSeleccionada: Tarea;
  tareas: Array<Tarea>;
  newTarea: ITarea;
  estado2str = estado2str;

  constructor(private tareaService: TareaService) {
    this.tareas = [];
    this.newTarea = {
      titulo: '',
      descripcion: ''
    };
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.tareaService.getTareas()
        .subscribe(tareas => {
          this.tareas = tareas;
        });
  }

  seleccionarTarea(t: Tarea) {
    this.tareaSeleccionada = t;
  }

  crearTarea() {
    console.log(this.newTarea);
    // TODO: Add loading controller
    this.tareaService.crearTarea(this.newTarea);
  }

  guardarTarea(t: Tarea) {
    console.log(`Guardando tarea: ${t}`);
  }
}
*/