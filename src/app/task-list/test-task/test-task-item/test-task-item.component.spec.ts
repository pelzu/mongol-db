import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskItemComponent } from './test-task-item.component';

describe('TestTaskItemComponent', () => {
  let component: TestTaskItemComponent;
  let fixture: ComponentFixture<TestTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTaskItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
