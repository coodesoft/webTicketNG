import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartpassComponent } from './smartpass.component';

describe('SmartpassComponent', () => {
  let component: SmartpassComponent;
  let fixture: ComponentFixture<SmartpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
