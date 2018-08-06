export enum EstadoTarea {
    Creada
    , EnProceso
    , Terminada
}

export function estado2str(e: EstadoTarea): string {
    switch (e) {
      case EstadoTarea.Creada: return 'Creada';
      case EstadoTarea.EnProceso: return 'En Proceso';
      case EstadoTarea.Terminada: return 'Terminada';
    }
  }

export class Tarea {
    id: number;
    titulo: string;
    descripcion;
    estado: EstadoTarea;
    fecha_inicio: Date;
    fecha_termino: Date;
    nombre_estado: string;

    constructor(id, titulo, descripcion, fecha_inicio, fecha_termino, estado = EstadoTarea.Creada, nombre_estado) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.fecha_inicio = fecha_inicio;
        this.fecha_termino = fecha_termino;
        this.nombre_estado = nombre_estado;
    }

    toString() {
        return `Tarea #${this.id}: ${this.titulo}`;
    }
}
