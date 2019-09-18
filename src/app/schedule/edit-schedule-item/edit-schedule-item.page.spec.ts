import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduleItemPage } from './edit-schedule-item.page';

describe('EditScheduleItemPage', () => {
  let component: EditScheduleItemPage;
  let fixture: ComponentFixture<EditScheduleItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditScheduleItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScheduleItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
