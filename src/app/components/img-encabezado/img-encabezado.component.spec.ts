import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEncabezadoComponent } from './img-encabezado.component';

describe('ImgEncabezadoComponent', () => {
  let component: ImgEncabezadoComponent;
  let fixture: ComponentFixture<ImgEncabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgEncabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
