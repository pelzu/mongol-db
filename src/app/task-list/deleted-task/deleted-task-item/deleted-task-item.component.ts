import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Document} from "../../../model/documents";
import {HttpTaskService} from "../../../shared/http/http-task.service";
import {TaskService} from "../../../shared/task.service";


@Component({
  selector: 'app-deleted-task-item',
  templateUrl: './deleted-task-item.component.html',
  styleUrls: ['./deleted-task-item.component.css']
})
export class DeletedTaskItemComponent implements OnInit {
  @Input()deletedTask: Document|undefined;

  constructor(private taskService:TaskService) {

  }

  ngOnInit(): void {
  }

  checkStatus():boolean {
return this.deletedTask?.taskStatus==3 ;

  }

  forceDeleteTask() {
    this.taskService.forceDeleteTask(this.deletedTask);
    this.taskService.refreshTasks() ;

  }

  restoreTask() {
    this.taskService.restoreTask(this.deletedTask).subscribe();
    this.taskService.refreshTasks() ;



  }


}
