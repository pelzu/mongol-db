import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../../model/documents";
import {HttpTaskService} from "../../../shared/http/http-task.service";
import {TaskService} from "../../../shared/task.service";

@Component({
  selector: 'app-added-task-item',
  templateUrl: './added-task-item.component.html',
  styleUrls: ['./added-task-item.component.css']
})
export class AddedTaskItemComponent implements OnInit {
  @Input()  addedTask: Document|undefined;


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  checkStatus():boolean  {
    return this.addedTask?.taskStatus==1 ;

  }

  moveToDone() {
  this.taskService.doneTask(this.addedTask).subscribe();

  }

  deleteTask(){
    this.taskService.deleteTask(this.addedTask).subscribe();


  }
}
