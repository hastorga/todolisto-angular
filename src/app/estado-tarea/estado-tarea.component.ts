import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { PipeTransform, Pipe } from '@angular/core';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-tarea',
  templateUrl: './estado-tarea.component.html',
  styleUrls: ['./estado-tarea.component.css'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('200ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class EstadoTareaComponent implements OnInit {

  constructor(private http: HttpClient, public estadoService: EstadoService) { }


  url_estados: string = "http://localhost:8000/estados";
  id: number;
  nombre: String;
  estado: any;
  estados: Array<Object>;


  
  toString() {
    return `Estado #${this.id}: ${this.nombre}`;
  }

  ngOnInit() {

    this.estadoService.getEstados()
    .subscribe((estados: Array<object>) => {
      this.estados = estados;
    });
  }

}
