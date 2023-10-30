import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestannasComponent } from './pestannas.component';

describe('PestannasComponent', () => {
  let component: PestannasComponent;
  let fixture: ComponentFixture<PestannasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PestannasComponent]
    });
    fixture = TestBed.createComponent(PestannasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
