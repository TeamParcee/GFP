import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticePlanPage } from './practice-plan.page';

describe('PracticePlanPage', () => {
  let component: PracticePlanPage;
  let fixture: ComponentFixture<PracticePlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticePlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticePlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
