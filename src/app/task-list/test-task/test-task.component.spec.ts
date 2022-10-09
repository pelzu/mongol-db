import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskComponent } from './test-task.component';

describe('TestTaskComponent', () => {
  let component: TestTaskComponent;
  let fixture: ComponentFixture<TestTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
