import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaDrillsPage } from './usa-drills.page';

describe('UsaDrillsPage', () => {
  let component: UsaDrillsPage;
  let fixture: ComponentFixture<UsaDrillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaDrillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaDrillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
