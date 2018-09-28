import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderResaltadosComponent } from './slider-resaltados.component';

describe('SliderResaltadosComponent', () => {
  let component: SliderResaltadosComponent;
  let fixture: ComponentFixture<SliderResaltadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderResaltadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderResaltadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
