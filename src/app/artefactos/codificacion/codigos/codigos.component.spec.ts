import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosComponent } from './codigos.component';

describe('CodigosComponent', () => {
  let component: CodigosComponent;
  let fixture: ComponentFixture<CodigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodigosComponent]
    });
    fixture = TestBed.createComponent(CodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
