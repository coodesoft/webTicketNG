import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizadosComponent } from './categorizados.component';

describe('CategorizadosComponent', () => {
  let component: CategorizadosComponent;
  let fixture: ComponentFixture<CategorizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
