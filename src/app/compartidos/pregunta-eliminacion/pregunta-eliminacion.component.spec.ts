import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaEliminacionComponent } from './pregunta-eliminacion.component';

describe('PreguntaEliminacionComponent', () => {
  let component: PreguntaEliminacionComponent;
  let fixture: ComponentFixture<PreguntaEliminacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntaEliminacionComponent]
    });
    fixture = TestBed.createComponent(PreguntaEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
