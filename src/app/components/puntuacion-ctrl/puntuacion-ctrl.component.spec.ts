import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuacionCtrlComponent } from './puntuacion-ctrl.component';

describe('PuntuacionCtrlComponent', () => {
  let component: PuntuacionCtrlComponent;
  let fixture: ComponentFixture<PuntuacionCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntuacionCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntuacionCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
