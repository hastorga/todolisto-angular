import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TareaCreadaComponent } from './tarea-creada/tarea-creada.component';
import { TareaEnProcesoComponent } from './tarea-en-proceso/tarea-en-proceso.component';
import { TareaTerminadaComponent } from './tarea-terminada/tarea-terminada.component';
import { EstadoTareaComponent } from './estado-tarea/estado-tarea.component';
import { GestionTareasComponent } from './gestion-tareas/gestion-tareas.component';
import { SearchPipe } from './search.pipe';
const appRoutes: Routes = [

  { path: '', component: GestionTareasComponent  },

  { path: 'estados', component: EstadoTareaComponent },

 

];
 
@NgModule({
  declarations: [
    AppComponent,
    TareaCreadaComponent,
    TareaEnProcesoComponent,
    TareaTerminadaComponent,
    EstadoTareaComponent,
    GestionTareasComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    UiModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
