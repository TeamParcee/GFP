import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewsPage } from './view-news.page';

describe('ViewNewsPage', () => {
  let component: ViewNewsPage;
  let fixture: ComponentFixture<ViewNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
