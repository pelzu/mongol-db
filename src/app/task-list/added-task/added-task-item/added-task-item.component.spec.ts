import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedTaskItemComponent } from './added-task-item.component';

describe('AddedTaskItemComponent', () => {
  let component: AddedTaskItemComponent;
  let fixture: ComponentFixture<AddedTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedTaskItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
