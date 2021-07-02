import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarSalaComponent } from './ingresar-sala.component';

describe('IngresarSalaComponent', () => {
  let component: IngresarSalaComponent;
  let fixture: ComponentFixture<IngresarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
