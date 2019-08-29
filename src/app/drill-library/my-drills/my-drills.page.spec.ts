import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDrillsPage } from './my-drills.page';

describe('MyDrillsPage', () => {
  let component: MyDrillsPage;
  let fixture: ComponentFixture<MyDrillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDrillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDrillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
