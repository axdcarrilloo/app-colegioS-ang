import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarUsuariosComponent } from './visualizar-usuarios.component';

describe('VisualizarUsuariosComponent', () => {
  let component: VisualizarUsuariosComponent;
  let fixture: ComponentFixture<VisualizarUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarUsuariosComponent]
    });
    fixture = TestBed.createComponent(VisualizarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
