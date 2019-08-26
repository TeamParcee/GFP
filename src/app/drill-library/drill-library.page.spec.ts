import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillLibraryPage } from './drill-library.page';

describe('DrillLibraryPage', () => {
  let component: DrillLibraryPage;
  let fixture: ComponentFixture<DrillLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillLibraryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
