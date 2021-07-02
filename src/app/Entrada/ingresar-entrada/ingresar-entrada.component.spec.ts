import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarEntradaComponent } from './ingresar-entrada.component';




describe('IngresarEntradaComponent', () => {
  let component: IngresarEntradaComponent;
  let fixture: ComponentFixture<IngresarEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
