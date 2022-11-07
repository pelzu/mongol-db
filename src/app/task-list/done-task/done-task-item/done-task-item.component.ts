import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../../model/documents";
import {HttpTaskService} from "../../../shared/http/http-task.service";
import {TaskService} from "../../../shared/task.service";

@Component({
  selector: 'app-done-task-item',
  templateUrl: './done-task-item.component.html',
  styleUrls: ['./done-task-item.component.css']
})
export class DoneTaskItemComponent implements OnInit {
  @Input()  doneTask: Document|undefined;


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  checkStatus():boolean  {
    return this.doneTask?.taskStatus==2;

  }

  restoreTask() {

  }

  deleteTask(){

  }
}
