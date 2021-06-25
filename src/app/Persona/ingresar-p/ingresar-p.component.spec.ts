import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPComponent } from './ingresar-p.component';

describe('IngresarPComponent', () => {
  let component: IngresarPComponent;
  let fixture: ComponentFixture<IngresarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
