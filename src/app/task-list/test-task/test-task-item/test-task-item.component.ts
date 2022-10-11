import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Document, Root} from "../../../model/documents";

@Component({
  selector: 'app-test-task-item',
  templateUrl: './test-task-item.component.html',
  styleUrls: ['./test-task-item.component.css']
})
export class TestTaskItemComponent implements OnInit {
  @Input() testTask: Document | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  restoreTask() {

  }

  forceDeleteTask() {

  }

  checkStatus(): boolean {
    return this.testTask?.taskStatus == 4;
  }
}
