import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedTaskItemComponent } from './deleted-task-item.component';

describe('DeletedTaskItemComponent', () => {
  let component: DeletedTaskItemComponent;
  let fixture: ComponentFixture<DeletedTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedTaskItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
