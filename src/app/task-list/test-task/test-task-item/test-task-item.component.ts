import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Document} from "../../../model/documents";
import {TaskService} from "../../../shared/task.service";

@Component({
  selector: 'app-test-task-item',
  templateUrl: './test-task-item.component.html',
  styleUrls: ['./test-task-item.component.css']
})
export class TestTaskItemComponent implements OnInit {
  @Input() testTask: Document | undefined;

  constructor(private taskService: TaskService) {
  }



  ngOnInit(): void {

  }


  restoreTask() {
    this.taskService.restoreTask(this.testTask).subscribe();
  }

  forceDeleteTask() {
    this.taskService.deleteTask(this.testTask).subscribe();

  }

  checkStatus(): boolean {
    return this.testTask?.taskStatus == 4;
  }
}
