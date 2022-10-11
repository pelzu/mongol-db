import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskItemComponent } from './done-task-item.component';

describe('DoneTaskItemComponent', () => {
  let component: DoneTaskItemComponent;
  let fixture: ComponentFixture<DoneTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneTaskItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
