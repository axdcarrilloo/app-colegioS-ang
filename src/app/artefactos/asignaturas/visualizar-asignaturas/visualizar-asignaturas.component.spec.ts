import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAsignaturasComponent } from './visualizar-asignaturas.component';

describe('VisualizarAsignaturasComponent', () => {
  let component: VisualizarAsignaturasComponent;
  let fixture: ComponentFixture<VisualizarAsignaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarAsignaturasComponent]
    });
    fixture = TestBed.createComponent(VisualizarAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
