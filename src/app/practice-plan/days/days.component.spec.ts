import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysComponent } from './days.component';

describe('DaysComponent', () => {
  let component: DaysComponent;
  let fixture: ComponentFixture<DaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
