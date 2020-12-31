import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyLayoutsComponent } from './empty-layouts.component';

describe('EmptyLayoutsComponent', () => {
  let component: EmptyLayoutsComponent;
  let fixture: ComponentFixture<EmptyLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
