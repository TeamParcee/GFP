import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTimeComponent } from './start-time.component';

describe('StartTimeComponent', () => {
  let component: StartTimeComponent;
  let fixture: ComponentFixture<StartTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTimeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
