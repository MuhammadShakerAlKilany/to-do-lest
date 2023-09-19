import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoLestComponent } from './to-do-lest.component';

describe('ToDoLestComponent', () => {
  let component: ToDoLestComponent;
  let fixture: ComponentFixture<ToDoLestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoLestComponent]
    });
    fixture = TestBed.createComponent(ToDoLestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
