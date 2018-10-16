import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEncabezadoComponent } from './slider-encabezado.component';

describe('SliderEncabezadoComponent', () => {
  let component: SliderEncabezadoComponent;
  let fixture: ComponentFixture<SliderEncabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderEncabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
