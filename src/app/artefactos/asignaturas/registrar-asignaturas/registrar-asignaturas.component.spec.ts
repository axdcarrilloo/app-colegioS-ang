import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAsignaturasComponent } from './registrar-asignaturas.component';

describe('RegistrarAsignaturasComponent', () => {
  let component: RegistrarAsignaturasComponent;
  let fixture: ComponentFixture<RegistrarAsignaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAsignaturasComponent]
    });
    fixture = TestBed.createComponent(RegistrarAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
