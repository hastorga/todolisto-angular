import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { EstadoTareaComponent } from '../estado-tarea/estado-tarea.component';
import { GestionTareasComponent } from '../gestion-tareas/gestion-tareas.component';


const appRoutes: Routes = [

  { path: '', component: GestionTareasComponent },
  { path: 'estados', component: EstadoTareaComponent },

 

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
