import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsAccionCodificacionComponent } from './btns-accion-codificacion.component';

describe('BtnsAccionCodificacionComponent', () => {
  let component: BtnsAccionCodificacionComponent;
  let fixture: ComponentFixture<BtnsAccionCodificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnsAccionCodificacionComponent]
    });
    fixture = TestBed.createComponent(BtnsAccionCodificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
