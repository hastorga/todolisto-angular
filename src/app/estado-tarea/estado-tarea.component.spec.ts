import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTareaComponent } from './estado-tarea.component';

describe('EstadoTareaComponent', () => {
  let component: EstadoTareaComponent;
  let fixture: ComponentFixture<EstadoTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
